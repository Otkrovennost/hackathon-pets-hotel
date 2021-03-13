import React from 'react'
import { Link } from 'react-router-dom';

import "./MainPage.scss"
import Pict from '../../../assets/image.png'
import Logo from '../../../assets/Logo.svg'
import AboutSection from './AboutSection';

const MainPage = () => {

  return (
    <div className='wrapper'>
      <div className='wrapper-content'>
        <div>
          <img src={Logo} alt='logo' />
        </div>
        <div>

          <div className='wrapper-content'>
            <div><img src={Pict} /></div>



            <div className='section'>

              <h1>Home Pet Hottel</h1>
              <h4>your pet will feel itself right at home</h4>
              <div className='button-general'>
                <Link to='/pets_on_holiday'><button >  pets  </button></Link>
                <Link to='/pet_sitters'><button >  pet-sitter  </button></Link>
              </div>
            </div>
          </div>
        </div>


        <AboutSection />
      </div >
    </div>
  )
}

export default MainPage;
