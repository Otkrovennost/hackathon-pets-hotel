import React from 'react'
import dog from './dog.png'
import './AboutSection.scss'
export default function AboutSection() {
    return (
        <div className='container'>
<div className='content-container'>
<h2>Возьму животное</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
Сommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

</div>
<img src={dog} alt="dog"/>
        </div>
    )
}
