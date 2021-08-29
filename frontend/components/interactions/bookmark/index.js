import React from "react"
import IconButton from "@material-ui/core/IconButton"

import { BookmarkSelected, BookmarkUnselected, Container } from "./styles"

function Bookmark() {
  return (
    <Container>
      <IconButton size="small">
        <BookmarkUnselected fontSize="large" color="inherit" />
      </IconButton>
    </Container>
  )
}

export default Bookmark
