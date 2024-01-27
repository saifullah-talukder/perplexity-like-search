import SearchInput from './SearchInput'
import SearchResult from './SearchResult'

export default function AskAnything() {
  return (
    <div className="flex flex-col items-start space-y-8">
      <SearchInput />
      <SearchResult />
    </div>
  )
}
