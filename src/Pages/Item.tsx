import { useParams, NavLink } from 'react-router-dom';
import  data  from '../Data/Data.json';
import formatCurrency from '../Utilites/FotmatCurrency';
import PageWrapper from '../Context/PageWrappers';
import raiting from '../Utilites/Raiting';
import React from 'react';

const Item = () => {
 
    let { id } = useParams();
    const thisItem = data.find((i:any) => i.id.toString() === id);
    const rate:number|any = thisItem?.raiting;
    const pric: number|any = thisItem?.price;
   
  return ( 
    <PageWrapper name={thisItem?.title}>
      <span className='text-right'>
        
      </span>
    <div className='container' key={thisItem?.id}>

        <div className='card-img-top'>
          <img height='400px' className='rounded' src={thisItem?.imag} alt="Photo of the House"/>
        </div>
        <div className="card-body">
        <p>
            <span>Location: <i>{thisItem?.location}</i> </span>
            <br/>
            <span>Type of the building: <i>{thisItem?.type}</i></span>
            <br />
            <span>Price: <i>{formatCurrency(pric)}</i> </span>
            <br />
            <span className=''>Raiting: {raiting(rate)}
             </span>
          </p>
         
        </div>  
      <button
      type="button" 
      className="btn btn-outline-success justify-content-center">
        <NavLink className='p-2' to="/">Return back</NavLink> 
      </button>       
    </div>
    </PageWrapper>
  )
}

export default Item