import React from 'react';
import { Link } from 'react-router-dom';
import dog from './assets/dog.png'
import './AboutSection.scss'
export default function AboutSection() {
    return (
      <div className='AboutSection'>
        <div className='container-aboutSection'>
          <div className='content-container'>
            <h2>Focused on Trust & Safety</h2>
            <p> 
              If you are going on vacation or on a business trip and looking for a pet-sitter?  Our platform makes finding a pet-sitter, easier than ever. 
              <span>
                <Link to='/pets_on_holiday'>Pets</Link>
              </span>
            </p>
            <p>
              If you are lonely and love animals, but you haven't got opportunity to keep them at home ... or if you are going to have a pet, but don't have any experience use our offer to get such experience while the owner is away
              <span>
              <Link to='/pet_sitters'>Pet-sitters</Link>
              </span>
            </p>
          </div>
          <div className='imgDog'>
              <img src={dog} alt="dog"/>
          </div>
        </div>
      </div>
    )
}
