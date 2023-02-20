import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../../Context/ShoppingCartContext';
import CartItem from './CartItem';
import formatCurrency from '../../Utilites/FotmatCurrency';
import data from '../../Data/Data.json';
import { ReactNode } from 'react';


type ShoppingCartProps = {
    isOpen: boolean
}


function ShoppingCart({ isOpen}: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();
   const handleCall = (e:any) =>{
    e.preventDefault()
    alert('No backend')
   }

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title> 
        </Offcanvas.Header>
        <Offcanvas.Body>
           <Stack gap={3}>
              {cartItems.map( i=>
                   <CartItem key={i.id} {...i} />
              )}
            <div className='row'> 
            <div className='fw-bold fs-5'>
              Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                  const item = data.find(i => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity
              }, 0

              ))}
              <div className='row'>
                <button
                type="button" 
                onClick={handleCall}
                className="btn btn-outline-success">
                   Call to buy
                </button> 
              </div> 
             </div>
           </div> 

           </Stack>

        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart