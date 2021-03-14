import React from 'react'
import "./PetsOnHoliday.scss"
export default function PetsCard(props) {

    const { name, img, dayStart, dayEnd, comment, contact, phone, pet } = props
    return (
        <div className='petcard'>
            <h2>{pet} {" "} {name} </h2>
            <img src={img} alt='pict' />
            <div className='petInfo'>
                <p style={{fontStyle:'italic'}}>My pet needs a hotel</p>
                <p> from {' '}<b>{dayStart}</b> to <b>{dayEnd}</b> </p>

                <p className="comment">{comment}</p>
                <p>Contacts: <b>{contact}</b> </p>
                <p>
                    mobile: <b>{phone}</b>
                </p>
            </div>

        </div>


    )
}
