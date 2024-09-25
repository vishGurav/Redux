import React from 'react'
import Product from './Product'
import Product1 from './Product1'
import { useSelector,useDispatch } from 'react-redux'
import { setCategoryFilter,setPriceFilter_min,setPriceFilter_max,setRatingFilter } from './redux/ProductSlice'

 const Home = () => {
    const dispatch=useDispatch();

const HandlecategoryChange=(e)=>{
    dispatch(setCategoryFilter(e.target.value))
}
const handlePriceminChange=(min)=>
{
    console.log("min",+min);
    
   dispatch(setPriceFilter_min(min))
}
const handlePricemaxChange=(max)=>
    {
        console.log("max",+max);
        
        dispatch(setPriceFilter_max(max));
    }
const HandleRatingChange=(e)=>{
    console.log(e);
    dispatch(setRatingFilter(e))
}
    return (
        <>
        
        {/* <div className='m-20 border-2 border-red-400 rounded-xl'>
            <h1 className=' text-2xl '> welcome to redux shop</h1>
            <button className='w-40 p-2 border border-red-500'>filter product</button>
            <div className="div">
                <label htmlFor="">Category :</label>
                <select onChange={HandlecategoryChange}>
                    <option value=" ">all</option>
                    <option value="electronics">electronics</option>

                    <option value="laptops">laptops</option>
                    <option value="computer">computer</option>


                </select>
            </div>
            <div className="">
                <label> Price Range:</label>
                <input type="number" placeholder='min'  min='0' onChange={(e)=>handlePriceminChange(Number(e.target.value))}/>
                <input type="number" placeholder='max'  min='0' onChange={(e)=>handlePricemaxChange(Number(e.target.value))}/>

                 <input type="number" placeholder='max' name="" id="" onChange={(e)=>handlePriceChange(0,Number(e.target.value))} /> 
            </div>
            <div className="">
                <label htmlFor="">Rating</label>
                <input type="number" min="0" max="5" onChange={(e)=>HandleRatingChange(Number(e.target.value))} />
            </div>
            
           <Product1/>
            
        </div> */}
        <section className="w-full h-auto bg-slate-50 gap-4 p-8 border-black flex ">
                <div className="w-64 h-full border border-gray-300 rounded-lg bg-[#fafaff] hidden lg:flex gap-8  flex-col p-4">
                     <div className="w-full h-[100px] border bg-black border-pink-600 text-5xl flex justify-center items-center text-white font-bold">Vish</div>
                     <div className="w-full h-auto p-4 bg-white border-pink-600">
                        
                     <h1 className="text-2xl font-bodyh font-semibold"> Categorys :</h1>

                        
                        {/* <ul className="pl-8">
                            {newval.map((c,index)=>(
                                <li className="py-1 font-bodyp text-base cursor-pointer hover:font-semibold" key={index} onClick={()=>handleCategory(c)} >{c}</li>
                            ))}
                        </ul>
                         */}


                     </div>

                     <div className="w-full h-[200px] p-4 bg-white border-pink-600">
                        <h1 className="text-2xl font-bodyh font-semibold"> Price :</h1>

                        <input type="number" className='border rounded-sm text-center mt-4 ml-2 border-gray-400' placeholder='min'  min='0' onChange={(e)=>handlePriceminChange(Number(e.target.value))}/>
                        <input type="number" className='border rounded-sm text-center mt-4 ml-2 border-gray-400' placeholder='max'  min='0' onChange={(e)=>handlePricemaxChange(Number(e.target.value))}/>
                        {/* <h1 className="text-base font-bodyp m-2">Enter min Price :</h1> */}
                        
                        {/* <input className="border rounded-sm text-center ml-2 border-gray-400" type="number" placeholder='min'  min='0' onChange={(e)=>handlePriceminChange(Number(e.target.value))}/> */}

                        {/* <h1 className="text-base m-2 font-bodyp ">Enter max Price :</h1> */}

                        {/* <input className="border rounded-sm text-center ml-2 border-gray-400" type="number" placeholder='max'  min='0' onChange={(e)=>handlePricemaxChange(Number(e.target.value))}/> */}


                     </div>
                     <div className="w-full h-[100px] p-4 bg-white border-pink-600">
                        <h1 className="text-2xl font-bodyh font-semibold"> Rating :</h1>
                        <input className=" w-[80%] m-2 border rounded-sm text-center  border-gray-400" type="number"  placeholder='Rating'  min='0' max='5' onChange={(e)=>HandleRatingChange(Number(e.target.value))}/>

                        


                     </div>


                     
                </div>
                <div className="flex-1 h-full border border-gray-300 flex flex-col rounded-lg gap-2">
                    <div className="w-full h-[80px] border-b bg-white border-gray-300 rounded-t-lg flex items-center px-8 ">
                        <input className="w-64 border border-gray-700 outline-none py-2 rounded-lg " type="email" placeholder="Search Product"   />
                        {/* onChange={(e)=>{handleSerch(e.target.value.toLowerCase())}} */}

                   </div>
                    <div className="w-full flex-1  bg-[#fafaff] py-8   border-yellow-500 flex flex-wrap justify-around ">
                        <Product1/>
                                                
                    </div>
                    

                </div>


            </section>
        </>
    )
}
export default Home