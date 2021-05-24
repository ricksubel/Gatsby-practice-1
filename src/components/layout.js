import * as React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import * as layoutStyles from './layout.module.scss'


const Layout = (props) => {
    const background = layoutStyles.background;
    const container = layoutStyles.container;
    const content = layoutStyles.content;

    return (
        <div className={background}>
            <div className={container}>
                <Header />
                <div className={content}>
                    {props.children}  
                </div>
            </div>
                <Footer />
        </div>
    )
}

export default Layout