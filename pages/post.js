import React from 'react'
import Link from 'next/link'
import Layout from 'layouts/Main';
import { getPost } from 'api/posts'

const IndexPage = ({ post }) => (
  <Layout>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </Layout>
)

IndexPage.getInitialProps = async ({ query }) => {
  const res = await getPost(query.slug)
  const json = await res.json()
  return { post: json[0] }
}

export default IndexPage
