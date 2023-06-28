import { SearchFormWrapper } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchPosts = z.object({
  query: z.string(),
})

type SearchFromPosts = z.infer<typeof searchPosts>

interface SearchFormProps {
  fetchPosts: (value: string) => void
  amountPosts: number
}

export function SearchForm({ amountPosts, fetchPosts }: SearchFormProps) {
  const { register, handleSubmit, reset } = useForm<SearchFromPosts>({
    resolver: zodResolver(searchPosts),
  })

  function handleSubmitInput(data: SearchFromPosts) {
    fetchPosts(data.query.toLowerCase())
    reset()
  }

  return (
    <SearchFormWrapper onSubmit={handleSubmit(handleSubmitInput)}>
      <div>
        <span>Publicações</span>
        <span>{amountPosts} publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormWrapper>
  )
}
