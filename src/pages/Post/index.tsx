import { Content } from './components/Content'
import { PostInfo } from './components/PostInfo'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { PostProps } from '../../@types/post-props'
import axios from 'axios'

export function Post() {
  const { postid } = useParams()
  const [content, setContent] = useState<PostProps>()

  useEffect(() => {
    getPostByID()
  })

  async function getPostByID() {
    const response = await axios.get(
      `https://api.github.com/gregolly/githublog/issues/${postid}`,
    )

    setContent(response.data)
  }

  return (
    <>
      <PostInfo content={content} />
      <Content content={content} />
    </>
  )
}
