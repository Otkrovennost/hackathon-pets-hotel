import React from 'react'
import "./PetsOnHoliday.scss"
export default function PetsCard(props) {

    const { name, img, dayStart, dayEnd, comment, contact, phone, pet } = props
    return (
        <div className='petcard'>
            <h2>{pet} {" "} {name} </h2>
            <img src={img} alt='pict' />
            <div className='petInfo'>
                <p> from {' '}{dayStart} to {dayEnd} </p>

                <p className="comment">{comment}</p>
                <p>Contacts: <b>{contact}</b> </p>
                <p>
                    mobail: <b>{phone}</b>
                </p>
            </div>

        </div>


    )
}
