import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'
import * as blogStyles from './blog.module.scss'



const BlogPage = () => {
    // Create shorthand variables
    const welcome3 = blogStyles.welcome3;
    const posts = blogStyles.posts;
    const postContain = blogStyles.postContain;
    const postLink = blogStyles.postLink;
    const postTitle = blogStyles.postTitle;
    const pubDate = blogStyles.pubDate;

    const data = useStaticQuery(graphql`
        query {
            blogPost: allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate (formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    return (
        <Layout>
        <Head title='blog'/>
        <h1 className={welcome3}>...of cool, hip thoughts.</h1>
        <ol className={posts}>
            {data.blogPost.edges.map((edge) => {
            return (
                <li className={postContain} key={edge.node.title}>
                    <Link 
                    className={postLink}
                    to={`/blog/${edge.node.slug}`}>
                    <h2 className={postTitle}>{edge.node.title}</h2>
                    <p className={pubDate}>{edge.node.publishedDate}</p>
                    </Link>
                </li>    
            )
            })}
        </ol>
    </Layout>
    )
}

export default BlogPage