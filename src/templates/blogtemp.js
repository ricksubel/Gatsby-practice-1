import * as React from "react"
import { graphql, navigate } from "gatsby"
import * as propTypes from "prop-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import Img from "gatsby-image"

import Head from '../components/head'
import Layout from "../components/layout"
import * as blogtempStyles from './blogtemp.module.scss'


export const query = graphql`
    query($slug: String!) {
        blog: contentfulBlogPost(slug: {eq: $slug}) {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                raw
                references {
                    ... on ContentfulAsset {
                        contentful_id
                        __typename
                        title
                        fluid(maxWidth: 600) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`

const options = {
    renderNode: {
        [INLINES.HYPERLINK]: ({ data }, children) => {
            return <a
                href={data.uri}
                target={`${data.uri}`}
                rel={`${data.uri}`}
                noopener noreferrer
            >{children}</a>
        },
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return <Img 
            fluid={node.data.target.fluid} 
            />
        },
    }
}

const Blog = ({ data }) => {

    const container = blogtempStyles.container;
    const backButton = blogtempStyles.backButton;
    const { title, body, publishedDate } = data.blog;

    return (
        <Layout>
            <div className={container}>
                <Head title={title}/>
                <h1>{title}</h1>
                <p>{publishedDate}</p>
                <div>{body && renderRichText(body, options)}</div>
                <button 
                    className={backButton} 
                    onClick={()=>{navigate("/blog")}}
                    >back to Blog</button>
            </div>
        </Layout>
    )
}

Blog.propTypes = {
  data: propTypes.object.isRequired,
}

export default Blog
