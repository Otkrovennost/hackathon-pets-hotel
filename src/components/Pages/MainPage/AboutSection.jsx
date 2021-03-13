import React from 'react'
import dog from './assets/dog.png'
import './AboutSection.scss'
export default function AboutSection() {
    return (
        <div className='AboutSection'>
        <div className='container-aboutSection'>
<div className='content-container'>
<h2>Возьму животное</h2>
<p>If you are going on vacation or on a business trip and do not know where to leave your pet, use our application to find a temporary home for your pet</p>

<p>If you are lonely and love animals, but do not have the opportunity to constantly keep at home... If you want to take a pet, but have never lived with an animal then take advantage of our offer to take a pet for a while  the owner leaves</p>
</div>
<div className='imgDog'>
    <img src={dog} alt="dog"/>
</div>

        </div>

        </div>
    )
}
