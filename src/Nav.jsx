
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cart from './Cart'

const Nav = () => {
    const items=useSelector((state)=>state.cart)
    return (
        <div className='h-20 border-2 border-black w-full bg-black flex justify-around text-white items-center'>
            <div className="text-3xl">
                    vish company
            </div>
            <div className="text-2xl flex gap-8">
                <Link to="/">Home</Link>
                <Link to="/cart">cart</Link>
                <h1 className='pr-20'> cart_Item:{items.length}</h1>

            </div>
            
        </div>
    )
}

export default Nav