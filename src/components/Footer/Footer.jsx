import React from 'react';

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__dev">
          <p className="footer__dev-desc">
            Created&nbsp;by
            Wild&nbsp;Code&nbsp;School
            Students
          </p>
          <ul className="footer__contacts">
            <li className="footer__contacts-item">
              <span className="footer__contacts-name">Diana Kovaleva</span>
              <div className="footer__contacts-list">
                <a className="footer__contacts-github" href="https://github.com/Dianakove32" target="_blank" rel="noreferrer">GitHub</a>
                <span role="separator">|</span>
                <a className="footer__contacts-linkedin" href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </li>
            <li className="footer__contacts-item">
              <span className="footer__contacts-name">Anastasiya Ivanova</span>
              <div className="footer__contacts-list">
                <a className="footer__contacts-github" href="https://github.com/Otkrovennost/" target="_blank" rel="noreferrer">GitHub</a>
                <span role="separator">|</span>
                <a className="footer__contacts-linkedin" href="https://www.linkedin.com/in/anastasiya-ivanova-1b3bba207/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </li>
            <li className="footer__contacts-item">
              <span className="footer__contacts-name">Irina Mychko</span>
              <div className="footer__contacts-list">
                <a className="footer__contacts-github" href="https://github.com/Irina-Riska" target="_blank" rel="noreferrer">GitHub</a>
                <span role="separator">|</span>
                <a className="footer__contacts-linkedin" href="https://www.linkedin.com/in/ira-mytchko/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
