import React from 'react'
import { Link } from 'routes'
import Wrapper from './Wrapper'

const PostItem = ({ post }) => (
  <Wrapper>
    <Link route='post' params={{ slug: post.title }}>
      <a>{post.title}</a>
    </Link>
  </Wrapper>
)

export default PostItem
