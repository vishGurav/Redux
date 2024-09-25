 
import React, { useEffect, useState } from 'react'
import { add } from './redux/CartSlice'
import { useDispatch ,useSelector } from 'react-redux'
import { fetchProducts, Statuses } from './redux/ProductSlice'
import Rating from './Rating'



 const Product1 = () => {
    const disptch=useDispatch()
    const{filteredProducts,status}=useSelector((state)=>state.product)
    // const {filteredProducts,status}=useSelector((state)=>state.product)
console.log(filteredProducts)
    // const [product,setproduct]=useState([])

    useEffect(()=>{
        // const fetchProducts=async()=>{
        //     const res=await fetch('https://fakestoreapi.com/products')
        //     const data=await res.json()
        //     console.log(data);
        //     setproduct(data)
        // }
        // fetchProducts();
        disptch(fetchProducts());
    },[disptch])
    const handleAdd=(product)=>{

        disptch(add(product))

    }
    if(status=== Statuses.LOADING)
    {
        return <h2>loding....</h2>
    }
    if(status=== Statuses.EROOR)
        {
            return <h2>something went wrong..</h2>
        }
    return (
        <div className='flex flex-wrap' >
            {filteredProducts.map((data)=>(
                <div key={data.id} className='border w-80 bg-white py-8 border-black flex flex-col justify-center items-center m-2 px-4 gap-4 '>
                    <img src={data.image} className='w-28 h-28' alt="" />
                    <h1 className='text-xl font-semibold'>{data.title}</h1>
                    <Rating rating={data.rating.rate} />
                    <h1> price:{data.price}</h1>
                    <button className='border-2 border-red py-2 px-4 mb-4' onClick={()=>handleAdd(data)}>Add to cart</button>
                </div>

            )
            )}      
        </div>
    )
}

export default Product1

