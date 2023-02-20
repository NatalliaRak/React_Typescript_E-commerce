import React, {useEffect} from 'react'
import data from '../Data/Data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const getRaiting = data.filter(i=> i.raiting);
const element = <FontAwesomeIcon icon={faStar} />

const Raiting = (getRaiting:number) => {
    
 if (getRaiting === 1){
    return (
        <span style={{color: 'yellow'}}>{element}</span>
    )
 }; if (getRaiting === 2){
    return (
        <span style={{color: 'yellow'}}>{element}{element}</span>
    )
 }; if (getRaiting === 3){
    return (
        <span style={{color: 'yellow'}}>{element}{element}{element}</span>
    )
    }; if (getRaiting === 4){
        return (
            <span style={{color: 'yellow'}}>{element}{element}{element}{element}</span>
        )
        }; if (getRaiting === 5){
            return (
                <span style={{color: 'yellow'}}>{element}{element}{element}{element}{element}</span>
            )
            }; 
  
 

}

export default Raiting