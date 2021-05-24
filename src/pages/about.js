import * as React from 'react'

import Head from '../components/head'
import Layout from '../components/layout'
import ImageContain from '../components/imageContain'
import * as indexStyles from './index.module.scss'



const AboutPage = () => {
  const aboutContain = indexStyles.aboutContain;
  const welcome2 = indexStyles.welcome2;

  return (
    <Layout>
      <Head title='about'/>
        <h1 className={welcome2}>...about me.</h1>
      <div className={aboutContain}>
        <ImageContain /> 
      </div>
    </Layout>
  )
}

export default AboutPage