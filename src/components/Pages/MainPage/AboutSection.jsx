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

<p>If you are lonely and love animals, but you haven't got opportunity to keep them at home ... or if you are going to have a pet, but don't have any experience use our offer to get such experience while the owner is away</p>
</div>
<div className='imgDog'>
    <img src={dog} alt="dog"/>
</div>

        </div>

        </div>
    )
}
