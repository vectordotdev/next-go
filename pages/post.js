import React from 'react'
import styled from 'styled-components'
import Layout from 'layouts/Main'
import { getPost } from 'api/posts'

const Wrapper = styled.div`
  padding: 3rem;
  max-width: 750px;
  margin: 0 auto;

  @media (max-width: 750px) {
    width: 100%;
    padding: 1rem;
  }

  h1 {
    color: #222;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 35px;
    font-family: "PT Sans", sans-serif;
    text-transform: capitalize;
    margin: 0;
  }

  p {
    line-height: 28px;
    color: #666;
    font-family: "PT Sans", sans-serif;
  }
`

const PostPage = ({ post }) =>
  <Layout>
    <Wrapper>
      <h1>
        {post.title}
      </h1>
      <p>
        {post.body}
      </p>
    </Wrapper>
  </Layout>

PostPage.getInitialProps = async ({ query }) => {
  const res = await getPost(query.slug)
  const json = await res.json()
  return { post: json[0] }
}

export default PostPage
