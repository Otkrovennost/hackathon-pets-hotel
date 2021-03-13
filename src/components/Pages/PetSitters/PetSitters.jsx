import React from 'react';


import CardSiters from './CardSiters';
import Footer from '../../Footer/Footer'

import {dataSiters} from '../../../data';

import "./PetSitters.scss";

const PetSitters = () => {
  return (
    <React.Fragment>
      <div className= 'pet-wrapper container'>
        {dataSiters.map((el, index)=> <CardSiters key={index} {...el}/>)}
      </div>
      <Footer/>
    </React.Fragment>
)
}

export default PetSitters;
