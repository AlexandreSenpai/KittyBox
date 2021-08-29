import React from "react"
import File from "../inputs/file"
import Search from "../inputs/search"

import { Container } from "./styles"

function Nav() {
  return (
    <Container>
      <Search />
      <File />
    </Container>
  )
}

export default Nav
