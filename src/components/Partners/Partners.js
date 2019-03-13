import React, { Component, Fragment } from 'react';
import './partners.css';
import partners from '../../jsonData/partners.json';
import Img from '../Img/Img';

const PartnerInfo = ({ info }) => {
  return <div className='partner-info-div'>
    <Img width='150px' img_url={info.img_url} />
    <div>{info.name}</div>
  </div>
}

const Partners = () => {
  return <div className='partners-list'>
    <h3>PARTNERS</h3>
    {partners.map(item => <PartnerInfo key={item.id} info={item} />)}
  </div>
}

export default Partners;