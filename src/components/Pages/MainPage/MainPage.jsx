import React from 'react'
import { Link } from 'react-router-dom';

import "./MainPage.scss"
import Girl from '../MainPage/assets/girl.png'
import Logo from '../../../assets/Logo.svg'
import AboutSection from './AboutSection';

const MainPage = () => {

  return (
    <div className='BothSections'>
      <div className='wrapper'>
        <div className='logo'>
          <img src={Logo} alt="logo"/>
        </div>
        <div className='wrapper-content container'>
          <img className="wrapper-content__img" src={Girl} alt="funny girl"/>
          <div className='section'>
            <h1>Home Pet Hottel</h1>
            <p>your pet will feel itself right at home</p>
            <div className='button-general'>
              <Link className="button" to='/pets_on_holiday'>pets</Link>
              <Link className="button" to='/pet_sitters'>pet-sitter</Link>
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
    </div >
  )
}

export default MainPage;