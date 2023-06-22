import { ChangeEvent } from 'react'
import { SearchFormWrapper } from './styles'

interface SearchFormProps {
  onChangeValue: (value: string) => void
  amountPosts: number
}

export function SearchForm({ onChangeValue, amountPosts }: SearchFormProps) {
  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    onChangeValue(event.target.value)
  }

  return (
    <SearchFormWrapper>
      <div>
        <span>Publicações</span>
        <span>{amountPosts} publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleChangeInput}
      />
    </SearchFormWrapper>
  )
}
