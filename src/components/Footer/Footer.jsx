import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
      </div>
      <ul>
        <li>audio description</li>
        <li>help centre</li>
        <li>gift cards</li>
        <li>media centre</li>
        <li>Investor relations</li>
        <li>jobs</li>
        <li>legal notice</li>
        <li>cookie</li>
        <li>contact us</li>
      </ul>
      <p className='copyright-text'>@ 1997-2023 Netflix,Inc.</p>
    </div>
  )
}

export default Footer