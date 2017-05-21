import React from 'react'
import Layout from '../layouts/Main';
import { getPosts } from '../api/posts'
import { Link } from '../routes'

const IndexPage = ({ posts }) => (
  <Layout>
    <ul>
      {posts.map(p => (
        <li>
          <Link route='post' params={{ slug: p.fields.slug }}>
            {p.fields.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  return { posts: res.items }
}

export default IndexPage
