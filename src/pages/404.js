import * as React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'


const NotFound = () => {
    return (
        <Layout>
            <Head title='four, oh four'/>
            <h1>Uh, oh! You're trying to navigate to a page that doesn't exist.</h1>
            <p><Link to='/'>Click here to head back to the Home page.</Link></p>
        </Layout>

    )
}

export default NotFound 