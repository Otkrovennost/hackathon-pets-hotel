import React from 'react'
import PetsCard from './PetCard';
import dataPets from '../../../data'

import "./PetsOnHoliday.scss"

const PetsOnHoliday = (props) => {
  return (
    <div    className='pet-wrapper'>
{dataPets.map((el, index) =>

     <PetsCard  {...el} key={index} />



)}
    </div>
)
}

export default PetsOnHoliday;