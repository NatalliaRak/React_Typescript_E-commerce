import { useState, ReactNode, useReducer, JSXElementConstructor, useEffect } from 'react';
import StoreItem from '../../ItemDetail/Item_in_Grid';
import data from '../../../Data/Data.json';
import { StoreItemProps } from '../../ItemDetail/Item_in_Grid';
import Wood from './Wood';
import Bricken from './Brick';
import React from 'react';




const Filrering = () => {
    
const [query, setQuery] = useState('');
const [result, setResult] = useState<StoreItemProps[]>();


const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  const enteredName = event.target.value;
  setQuery(enteredName);
};

const search = (e:any) => {
    e.preventDefault();
  const foundItems = data.filter((item) =>
    item.location.toLowerCase().includes(query.toLowerCase())
  );
  setResult(foundItems);
};



  return (
     <>

     <div className="container mb-3 mt-3 p-4">
     <br/>
     <Wood />
     <Bricken />
          <form onSubmit={search} className="container m-3">

            <input
                  value={query}
                  onChange={inputHandler}
                  placeholder="Find houses by country"
                  className="form-control" />
              <br />
              <button type="submit" className="btn btn-outline-success" onClick={search}>Search</button>
         </form>
          <br/>
          <div className="row">
            { result && result.length > 0 ? (
                  result?.map((i) => (
                      <div className='col-sm col-lg-4 col-md-6' key={i.id}>
                          <h6> Check the <b> {i.type}</b> house for sale in <i>{i.location}</i></h6>
                          <StoreItem type={i.type} id={i.id} title={i.title} location={i.location} imag={i.imag} price={i.price} />
                      </div>
                  ))
              ) : result && result.length === 0 ? (
                  <div className='text-center p-4'>
                      <h6>No houses for sale in <i>{query}</i></h6>
                  </div>
              ) : <div className='m-3'>
                     <h2>All houses for sale</h2>
                    <div className='container p-4 row'>
        {
                data.map(i=>(
                <div className='col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center' key={i.id}>
                    <StoreItem {...i} />
                </div>)
        )}

            </div>
  
                  </div>
              }

          </div>
      </div></>
  )
}

export default Filrering