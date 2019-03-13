import React, { Component, Fragment } from 'react';
import './header.css';
import Img from '../Img/Img';

const Navlinks = () => {
  return <div className='collapse navbar-collapse' id='navbar'>
    <ul className='nav navbar-nav navbar-right'>
      <li className='active'>
        <a href='/'>Home</a>
      </li>
      <li><a href='/aims'>Aims & Objectives</a></li>
      <li><a href='/hall_of_fame'>Hall of Fame</a></li>
      <li><a href='/contact'>Contact Us</a></li>
      <li>
        <a href='https://www.facebook.com/groups/16854265742/' className='facebookColor' target='_blank' data-toggle='tooltip' title='Join our Facebook group!'><span className='fa fa-facebook circle'></span></a>
      </li>
      <li>
        <a className='btn btn-lg btn-orange' id='add_member_button' data-toggle='modal' data-target='#signupModal'>Membership</a>
      </li>
    </ul>
  </div>
}

const NavBar = () => {
  return <nav className='navbar navbar-default' role='navigation'>
    <div className='container'>
      <div className='navbar-header'>
        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#navbar'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
        </button>
        <a class="navbar-brand" href="/">
        <img src="/images/logo.jpg" class="img-responsive brandLogo hide-md-down" />
      </a>
      <span class="navbar-brand hide-md-up">KV Alumni Association</span>
      <span class="brandname navbar-brand hide-md-down hide-md pull-right">Kendriya Vidyalaya Alumni Association</span>
      </div>
      <Navlinks />
    </div>
  </nav>
}

const Header = () => {
  return <Fragment>
    <center>
      <Img
        img_url='https://cdn-images-1.medium.com/letterbox/166/72/50/50/1*_GOj7-7Ye4Yx2Uy2p2DE9Q.png?source=logoAvatar-lo_9ccbaf8756c9---3dddcca454bf'
        className='img-responsive hide-md-up width-100px' />
    </center>
    <NavBar />
  </Fragment>
}

export default Header;