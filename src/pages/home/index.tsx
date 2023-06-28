import { CardPost } from './components/CardPost'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { ContainerCards } from './styles'

import { useEffect, useState, useCallback } from 'react'
import { api } from '../../lib/axios'

export interface PostsProps {
  id: number
  title: string
  body: string
  created_at: string
  number: number
}

export function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([])

  const amountPosts = posts.length

  const fetchPosts = useCallback(async (query?: string) => {
    const responseSearch = await api.get(
      `/search/issues?q=${
        query ?? ''
      }is:issue%20is:open%20repo:gregolly/githublog`,
    )

    setPosts(responseSearch.data.items)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <div>
      <Profile />
      <SearchForm amountPosts={amountPosts} fetchPosts={fetchPosts} />
      <ContainerCards>
        {posts &&
          posts.map((post) => (
            <CardPost
              key={post.id}
              title={post.title}
              body={post.body}
              created_at={post.created_at}
              number={post.number}
            />
          ))}
      </ContainerCards>
    </div>
  )
}
