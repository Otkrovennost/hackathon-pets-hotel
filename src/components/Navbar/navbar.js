import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.svg'
import './navbar.scss'

const Navbar = () => {
    return (

        <div className='wrapper-navbar container'>

            <Link to='/'><img src={Logo} alt='logo' /></Link>
            <ul>
                <Link className='Link' to='/pets_on_holiday'><p>pets</p></Link>
                <Link className='Link' to='/pet_sitters'><p>pet-sitter</p></Link>

            </ul>




        </div>
    )
}

export default Navbar;