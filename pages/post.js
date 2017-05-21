import React from 'react'
import Link from 'next/link'
import Layout from '../layouts/Main';
import { getPost } from '../api/posts'

const IndexPage = ({ post }) => (
  <Layout>
    <h1>{post.fields.title}</h1>
    <p>{post.fields.body}</p>
  </Layout>
)

IndexPage.getInitialProps = async ({ query }) => {
  const res = await getPost(query.slug)
  return { post: res.items[0] }
}

export default IndexPage
