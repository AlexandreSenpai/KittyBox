import React from "react"
import IconButton from "@material-ui/core/IconButton"

import { Container, LikeIconSelected, LikeIconUnselected } from "./styles"

function Like() {
  return (
    <Container>
      <IconButton size="small">
        <LikeIconUnselected fontSize="large" color="inherit" />
      </IconButton>
    </Container>
  )
}

export default Like
