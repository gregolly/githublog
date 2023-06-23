import { CardPost } from './components/CardPost'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { ContainerCards } from './styles'

import { useEffect, useState } from 'react'
import axios from 'axios'

export interface PostsProps {
  id: number
  title: string
  body: string
  created_at: Date
  number: number
}

export function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([])
  const [filteredPosts, setFilteredPosts] = useState<PostsProps[]>([])
  const [searchInput, setSearchInput] = useState('')

  const amountPosts = posts.length

  useEffect(() => {
    getIssuesFromGithubApi()
  }, [])

  async function getIssuesFromGithubApi() {
    const response = await axios.get(
      'https://api.github.com/search/issues?q=lorem%20repo:gregolly/githublog',
    )

    setPosts(response.data.items)
  }

  function setValueOnSearchForm(value: string) {
    setSearchInput(value)
  }

  useEffect(() => {
    const filteredPostsSearch = posts.filter((post) =>
      post.title.toLowerCase().includes(searchInput),
    )
    setFilteredPosts(filteredPostsSearch)
  }, [posts, searchInput])

  return (
    <div>
      <Profile />
      <SearchForm
        onChangeValue={setValueOnSearchForm}
        amountPosts={amountPosts}
      />
      <ContainerCards>
        {filteredPosts.length === 0
          ? posts.map((post) => (
              <CardPost
                key={post.id}
                title={post.title}
                body={post.body}
                created_at={post.created_at}
                number={post.number}
              />
            ))
          : filteredPosts.map((post) => (
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
