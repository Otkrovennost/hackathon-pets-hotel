import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.svg'
import './navbar.scss'

const Navbar = ({isActiveLinkPets=false, isActiveLinkSitters=false}) => {
    return (
        <div className='navbar'>
          <div className="wrapper-navbar container">
            <Link to='/'><img className="navbar-img" src={Logo} alt='logo' /></Link>
            <ul>
                <Link className={!isActiveLinkPets ? 'Link' : 'Link Link__active'} to='/pets_on_holiday'>Pets</Link>
                <Link className={!isActiveLinkSitters ? 'Link' : 'Link Link__active'}  to='/pet_sitters'>Pet-sitters</Link>

            </ul>
          </div>
        </div>
    )
}

export default Navbar;