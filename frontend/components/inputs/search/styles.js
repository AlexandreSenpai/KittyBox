import styled from "styled-components"
import { Form, Input } from "../../form"
import SearchIcons from "@material-ui/icons/Search"

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const SearchForm = styled(Form)`
  position: relative;
  height: 5rem;
  display: flex;
  align-items: center;
`
export const SearchInput = styled(Input)`
  width: 25rem;
  height: 100%;
  border-radius: 0.3rem;
  background: ${(props) => props.theme.background.primary};
  border: none;
  padding: 1.6rem 5rem 1.6rem 1.6rem;
  color: white;
  transition: 200ms ease-in;

  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  :focus {
    color: black;
    outline-style: none;
    background: white;
    border: 0.1rem solid ${(props) => props.theme.complementary}4d;
    width: 50rem;
  }
`
export const SearchIcon = styled(SearchIcons)`
  position: absolute;
  right: 25px;
  color: ${(props) => props.theme.complementary};
`
