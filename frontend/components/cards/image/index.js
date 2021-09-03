import React, { forwardRef } from "react"

import Like from "../../interactions/like"
import Bookmark from "../../interactions/bookmark"
import LoveCounter from "../../interactions/loveCounter"
import Avatar from "../../user/avatar"

import {
  Container,
  ImageHolder,
  OptionsHolder,
  Image,
  AuthorInformation,
  AuthorName,
  CreatedDate,
  AuthorInformationHolder,
  AuthorInformationWrapper,
  PostTitle,
} from "./styles"

function ImageCard({ src, dimensions, author, created_at, title }, ref) {
  return (
    <Container ref={ref}>
      <AuthorInformationHolder>
        <AuthorInformationWrapper>
          <Avatar src={author?.image} width={"5.5rem"} height={"5.5rem"} />
          <AuthorInformation>
            <AuthorName>{author?.name}</AuthorName>
            <PostTitle>{title}</PostTitle>
            <CreatedDate>{created_at}</CreatedDate>
          </AuthorInformation>
        </AuthorInformationWrapper>
      </AuthorInformationHolder>
      <ImageHolder>
        <Image
          src={src}
          width={dimensions.width}
          height={dimensions.height}
          blurDataURL={src}
          quality={1}
          placeholder="blur"
          layout="responsive"
        />
      </ImageHolder>
      <OptionsHolder>
        <Like />
        <Bookmark />
        <LoveCounter />
      </OptionsHolder>
    </Container>
  )
}

export default forwardRef(ImageCard)
