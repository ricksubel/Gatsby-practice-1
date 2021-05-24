import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as footerStyles from './footer.module.scss'
import imageSource from '../images/meWave.png'

const Footer = () => {
    const footer = footerStyles.footer;
    const image = footerStyles.image;
    const copy = footerStyles.copy;

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={footer}>
            <img className={image} src={imageSource} alt='memoji wav'></img>
            <p className={copy}>{data.site.siteMetadata.author} © 2021</p>
        </footer>
    )
}

export default Footer