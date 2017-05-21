import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from 'layouts/Main';
import { getPost } from 'api/posts'

const Wrapper = styled.div`
  padding: 15px;
`

const IndexPage = ({ post }) => (
  <Layout>
    <Wrapper>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </Wrapper>
  </Layout>
)

IndexPage.getInitialProps = async ({ query }) => {
  const res = await getPost(query.slug)
  const json = await res.json()
  return { post: json[0] }
}

export default IndexPage
