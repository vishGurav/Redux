import { createSlice } from "@reduxjs/toolkit";

 export const Statuses=Object.freeze({
    IDLE:"idle",
    EROOR:"error",
    LOADING:"loading",
})
const ProductSlice=createSlice({
    name:"product",
    initialState:{
        data:[],
        filters:{
            category:'',
            price_min:0,
            price_max:100000,
            rating:0
        },
        filteredProducts:[],

        status:Statuses.IDLE,

    },
    reducers:{
        setProducts(state,action)
        {
            state.data=action.payload
            state.filteredProducts=action.payload
        },
        setCategoryFilter(state,action)
        {
            state.filters.category=action.payload;
            state.filteredProducts=applyFilters(state.data,state.filters)

        },
        setPriceFilter_min(state,action)
        {
            state.filters.price_min=action.payload;
            console.log("redux"+state.filters.price_min);
        //    state.filteredProducts = state.data.filter((product)=>product.price>=state.filters.price_min)
            state.filteredProducts=applyFilters(state.data,state.filters)

        },
        setPriceFilter_max(state,action)
        {
            state.filters.price_max=action.payload;
            if(state.filters.price_max ===0)
            {
                state.filters.price_max=100000
            }
            console.log("redux"+state.filters.price_max);
        //    state.filteredProducts = state.data.filter((product)=>product.price>=state.filters.price_min)
            state.filteredProducts=applyFilters(state.data,state.filters)

        },
        setRatingFilter(state,action)
        {
            state.filters.rating=action.payload;
            
            console.log(state.filters.rating);
            state.filteredProducts=applyFilters(state.data,state.filters)

        },
        setStatus(state,action)
        {
            state.status=action.payload
        }
        
    },
})
const applyFilters=(products,filters)=>{

    return products.filter(product=>{
        // const meetsCategory=filters.category?product.category === filters.category:true

        const meetPrice=product.price>=filters.price_min && product.price<=filters.price_max
        const meetsRating=product.rating.rate>=filters.rating
        return  meetsRating && meetPrice
    })
}

export const {setProducts, setCategoryFilter,setPriceFilter_min,setPriceFilter_max,setRatingFilter, setStatus}=ProductSlice.actions;
export default ProductSlice.reducer;

export function fetchProducts()
{
    return async function fetchProductssThunk(dispatch,getState)
    {
        dispatch(setStatus(Statuses.LOADING));
        try{

            const res=await fetch('https://fakestoreapi.com/products')
            

            const data=await res.json()
            dispatch(setProducts(data))
            dispatch(setStatus(Statuses.IDLE));
        }
        catch(err){
            console.log(err);
            dispatch(setStatus(Statuses.EROOR));


        }
    }
}
