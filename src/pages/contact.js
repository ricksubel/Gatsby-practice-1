import * as React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaGithub, FaLinkedin, FaRegEnvelope  } from 'react-icons/fa'

import Head from '../components/head'
import Layout from '../components/layout'
import * as indexStyles from './index.module.scss'


const ContactPage = () => {
  const welcome4 = indexStyles.welcome4;
  const contact = indexStyles.contact;
  const iconContain = indexStyles.iconContain;
  const icons = indexStyles.icons
  const faceURL = `https://www.facebook.com/ricksubel/`;
  const instaURL = `https://www.instagram.com/ricksubel/`;
  const twittURL = `https://twitter.com/ricksubel`;
  const gitURL = `https://github.com/ricksubel`;
  const linkURL = `https://www.linkedin.com/in/ricksubel/`;
  const mailURL = `mailto:ricksubel@gmail.com?Subject=Hello`;

  return (
    <Layout>
      <Head title='contact'/>
      <h1 className={welcome4}>...on my bizness.</h1>
      <div className={contact}>
        <div className={iconContain}>
          <a 
            className={icons}
            href={faceURL} 
            role='button'
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook link">
            <FaFacebookSquare size='4rem' fill='coral'/>
          </a>
          <a 
            className={icons}
            href={instaURL} 
            role='button' 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram link">
            <FaInstagramSquare size='4rem' fill='coral'/>
          </a>
          <a 
            className={icons}
            href={twittURL} 
            role='button'
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Twitter link">
            <FaTwitterSquare size='4rem' fill='coral'/>
          </a>
          <a 
            className={icons}
            href={gitURL} 
            role='button' 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Github link">
            <FaGithub size='4rem' fill='coral'/>
          </a>
          <a 
            className={icons}
            href={linkURL} 
            role='button'
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Linkedin link">
            <FaLinkedin size='4rem' fill='coral'/>
          </a>
          <a 
            className={icons}
            href={mailURL}
            role='button' 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Link to email">
            <FaRegEnvelope size='4rem' fill='coral'/>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage