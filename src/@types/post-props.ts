export interface PostProps {
  body: string
  title: string
  html_url: string
  created_at: string
  comments: number
  user: {
    login: string
  }
}
