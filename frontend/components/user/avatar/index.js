import React from "react"
import { Container, RoundedHolder, UserImage } from "./styles"

const Avatar = ({ src }) => {
  return (
    <Container>
      <RoundedHolder>
        <UserImage
          src={
            src ||
            "https://i.pinimg.com/originals/a1/9d/fd/a19dfd0cd5b84390c983b372c91b7f22.jpg"
          }
        />
      </RoundedHolder>
    </Container>
  )
}

export default Avatar
