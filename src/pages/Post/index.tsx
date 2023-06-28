import { Content } from './components/Content'
import { PostInfo } from './components/PostInfo'
import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { PostProps } from '../../@types/post-props'
import { api } from '../../lib/axios'

export function Post() {
  const { postid } = useParams()
  const [content, setContent] = useState<PostProps>({} as PostProps)

  const getPostByID = useCallback(async () => {
    try {
      const response = await api.get(
        `repos/gregolly/githublog/issues/${postid}`,
      )
      console.log(response.data)
      setContent(response.data)
    } catch (erro) {
      console.log('Deu algum erro na requisicao da api', erro)
    }
  }, [postid])

  useEffect(() => {
    getPostByID()
  }, [getPostByID])

  return (
    <>
      <PostInfo content={content} />
      <Content content={content} />
    </>
  )
}
