import React from "react"

import { Container, SearchForm, SearchIcon, SearchInput } from "./styles"

const Search = () => {
  const handle_submit = ({ search_term }) => {
    console.log(search_term)
  }

  return (
    <Container>
      <SearchForm onSubmit={handle_submit}>
        <SearchIcon fontSize={"large"} />
        <SearchInput
          placeholder="Que tal procurar por algo...?"
          name="search_term"
          type="search"
        />
      </SearchForm>
    </Container>
  )
}

export default Search
