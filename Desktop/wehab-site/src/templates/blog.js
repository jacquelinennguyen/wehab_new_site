import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
    query ($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
        frontmatter {
            title
        }
        html
        }
    }
`

const BlogPage = (props) => {
    return (
        <Layout>
            <h2>{props.data.markdownRemark.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
        </Layout>
    )
}

export default BlogPage