import formatCurrency from '../../Utilites/FotmatCurrency'
import {  NavLink } from "react-router-dom";
import '../../App.css';
import { useShoppingCart } from '../../Context/ShoppingCartContext';
import React from 'react';



export type StoreItemProps={
    id: number
    title: string 
    location: string
    type?: string 
    price: number | any
    imag: string
}


const StoreItem = (
    {id, title, location, type, price, imag}:StoreItemProps
) => {
  const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart } = useShoppingCart();

   const quantity = getItemQuantity(id);

  return (
    <div className='contaner mr-auto d-flex justify-content-center p-4' key={id}>
      <div>
        <img src={imag} height='125px' width="200px" className='rounded' />
        <p>
            {title} in <i>{location}</i>
            <br/>
            {type}
            <br/>
            <b>{formatCurrency(price)}</b>
        </p>
        <div className='align-bottom'>
                    {
                    quantity === 0 ? (
                      <button
                      type="button" 
                      className="btn btn-outline-success  btn-block mt-auto w-100
                      justify-content-center"
                      onClick={()=> increaseItemQuantity(id)}
                     >
                        
                         Add to cart </button>
                    ) : 
                    <div className='flex-column'
                     style={{ gap: '5.rem'}}
                     >
                        <div className='d-flex align-items justify-content-center'
                        style={{ gap: '5.rem'}}>
                          
                           <button
                           type="button" className="btn btn-outline-primary"
                           onClick={()=> decreaseItemQuantity(id)}>-</button>
                           <div>
                               <span className='fs-3'>{quantity}</span>
                               In cart
                           </div>
                           <button
                           type="button" className="btn btn-outline-primary"
                           onClick={()=> increaseItemQuantity(id)}
                           >+</button>   
                        </div>
                        <button
                           type="button" className="btn btn-danger btn-sm"
                           onClick={()=> removeFromCart(id)}>Remove</button> 
                    </div>
                    }

                </div>
                <br/>
                <button type="button" 
                      className="btn btn-outline-success  btn-block mt-auto w-100
                      justify-content-center">
                  <NavLink className='p-4' to={`/${id}`}  > 
                    Check detail
                  </NavLink>  
                </button>
                <br/>
       
      </div>
    </div>
  )
}

export default StoreItem