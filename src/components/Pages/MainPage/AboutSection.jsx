import React from 'react';
import { Link } from 'react-router-dom';
import dog from './assets/dog.png'
import './AboutSection.scss';
import arrow from './assets/right-arrow.svg';
export default function AboutSection() {
    return (
      <div className='AboutSection'>
        <div className='container-aboutSection'>
          <div className='content-container'>
            <h2 className="about__text">Focused on Trust & Safety</h2>
            <p className="teaserText"> 
              If you are going on vacation or a business trip and looking for a pet-sitter: our platform makes finding a pet-sitter, easier than ever. 
              <span>
                <Link className="arrowLink" to='/pets_on_holiday'>Pets<img src={arrow} alt="arrow"/></Link>
              </span>
            </p>
            <p className="teaserText">
              If you are lonely and love animals, but you haven't got opportunity to keep them at home ... or if you are going to have a pet, but don't have any experience use our offer to get such experience while the owner is away
              <span>
              <Link className="arrowLink" to='/pet_sitters'>Pet-sitters<img src={arrow} alt="arrow"/></Link>
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
