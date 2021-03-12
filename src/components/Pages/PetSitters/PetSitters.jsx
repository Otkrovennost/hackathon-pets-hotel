import React from 'react'
import CardSiters from './CardSiters';
import {dataSiters} from '../../../data'
import "./PetSitters.scss"

const PetSitters = () => {
  return (
    <div className= 'pet-wrapper container'>
{dataSiters.map((el, index)=> <CardSiters key={index} {...el}/>)}
    </div>
)
}

export default PetSitters;
