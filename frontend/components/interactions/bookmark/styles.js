import styled from "styled-components"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import BookmarkIcon from "@material-ui/icons/Bookmark"

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 0.4rem;
`

export const BookmarkUnselected = styled(BookmarkBorderIcon)`
  color: ${(props) => props.theme.hover};

  :hover {
    color: ${(props) => props.theme.interactions.bookmark};
    cursor: pointer;
  }
`

export const BookmarkSelected = styled(BookmarkIcon)`
  color: #2e66a6;
`
