 
import React, { useEffect, useState } from 'react'
import { add } from './redux/CartSlice'
import { useDispatch } from 'react-redux'
import Rating from './Rating'


 const Product = () => {
    const disptch=useDispatch()
    const [product,setproduct]=useState([])
    useEffect(()=>{
        const fetchProducts=async()=>{
            const res=await fetch('https://fakestoreapi.com/products')
            const data=await res.json()
            console.log(data);
            setproduct(data)
        }
        fetchProducts();
    },[])
    const handleAdd=(product)=>{

        disptch(add(product))

    }
    return (
        <div className='flex flex-wrap' >
            {product.map((data)=>(
                <div key={data.id} className='border w-80 border-black flex flex-col justify-center items-center m-2 px-4 gap-4 '>
                    <img src={data.image} className='w-28 h-28' alt="" />
                    <h1 className='text-xl font-semibold'>{data.title}</h1>
                    <h1>Rating : {data.Rating}</h1>
                    <h1> price:{data.price}</h1>
                    <button className='border-2 border-red py-2 px-4 mb-4' onClick={()=>handleAdd(data)}>Add to cart</button>
                </div>

            )
            )}      
        </div>
    )
}

export default Product

