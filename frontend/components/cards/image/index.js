import React from "react"

import Like from "../../interactions/like"
import Bookmark from "../../interactions/bookmark"
import LoveCounter from "../../interactions/loveCounter"
import { Container, ImageHolder, OptionsHolder, Image } from "./styles"

function ImageCard({ src, dimensions }) {
  return (
    <Container>
      <ImageHolder>
        <Image
          src={src}
          width={dimensions.width}
          height={dimensions.height}
          layout="responsive"
          placeholder="blur"
          blurDataURL={src}
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

export default ImageCard
