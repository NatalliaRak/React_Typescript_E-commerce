import { useState, useEffect, MouseEvent, ReactNode } from 'react';
import data from '../../../Data/Data.json';
 import StoreItem from '../../ItemDetail/Item_in_Grid';
import React from 'react';


const brick = data.filter(i=> i.type==="brick");

const Bricken = ():JSX.Element => {

 
    const [filterBrick, setfilterBrick] = useState(false);

  
  const handleBrick = () => {
    setfilterBrick(true);
  }
  const closeBrick = () => {
    setfilterBrick(false);
  };

  const setBrick = () =>{
    if (filterBrick === true){
      return (
        (
          brick.map(i => (
            <div className='col-sm col-md-4 col-lg-4 p-4' key={i.id}>
               <span><b>Brick House in {i.location}</b></span>
              <StoreItem id={i.id} title={i.title} location={i.location} imag={i.imag} price={i.price} />
            </div>
          ))
        ))
    }}

    
  return (
    <div>
        <div className="form-check form-check-inline">
                 <button className="btn btn-outline-success"
                  onClick={handleBrick}
                  onDoubleClick={closeBrick}>
                    Brick houses</button>  

        </div>
        {filterBrick === true  ?(
              <div className='row m3'>
                  {setBrick()}
              </div>
        )
        
        : <></>
        }
       
    </div>
  )
}

export default Bricken


