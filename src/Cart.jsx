
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product';
import { remove } from './redux/CartSlice';

 const Cart = () => {
    const dispatch=useDispatch()

    const products=useSelector(state=>state.cart)
    console.log(products);

    const handledelet=(id)=>{
        dispatch(remove(id))

    }
    return (
        <div className='m-20 border-2 border-red-400 rounded-xl'>
            <h1 className='text-2xl'>cart page</h1>
            <div className="">
                {
                    products.map((product)=>(
                        <div className=" w-full h-40 my-4 border border-black flex justify-evenly flex-wrap items-center" >
                            <img src={product.image} alt="" className='w-20 h-20'/>
                            <h1>{product.title}</h1>
                            <h1>{product.price}</h1>
                            <button className='border border-red-500 w-40 h-20 px-4 py-2' onClick={()=>handledelet(product.id)}>remove</button>
                        </div>
                    ))
                }
            </div>

            
        </div>
    )
}
export default Cart