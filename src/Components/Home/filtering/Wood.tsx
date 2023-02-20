import { useState, useEffect, MouseEvent, ReactNode } from 'react';
import data from '../../../Data/Data.json';
 import StoreItem from '../../ItemDetail/Item_in_Grid';
import React from 'react';


const wooden = data.filter(i=> i.type==="wooden");

const Woodenen = ():JSX.Element => {

 
    const [filterWooden, setfilterWooden] = useState(false);

  
  const handleWooden = () => {
    setfilterWooden(true);
  }
  const closeWooden = () => {
    setfilterWooden(false);
  };

  const setWooden = () =>{
    if (filterWooden === true){
      return (
        (
          wooden.map(i => (
            <div className='col-sm col-md-4 col-lg-4 p-4' key={i.id}>
               <span><b>Wooden House in {i.location}</b></span>
              <StoreItem id={i.id} title={i.title} location={i.location} imag={i.imag} price={i.price} />
            </div>
          ))
        ))
    }}

    
  return (
    <div>
        <div className="form-check form-check-inline">
                 <button className="btn btn-outline-success"
                  onClick={handleWooden}
                  onDoubleClick={closeWooden}>
                    Wooden houses</button>  

        </div>
        {filterWooden === true  ?(
              <div className='row m3'>
                  {setWooden()}
              </div>
        )
        
        : <></>
        }
       
    </div>
  )
}

export default Woodenen

