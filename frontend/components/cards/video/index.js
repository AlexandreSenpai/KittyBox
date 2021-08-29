import React from "react"

import Like from "../../interactions/like"
import Bookmark from "../../interactions/bookmark"
import LoveCounter from "../../interactions/loveCounter"
import { Container, VideoHolder, OptionsHolder, Video } from "./styles"

function VideoCard({ src }) {
  return (
    <Container>
      <VideoHolder>
        <Video src={src} controls={true} width={"100%"} />
      </VideoHolder>
      <OptionsHolder>
        <Like />
        <Bookmark />
        <LoveCounter />
      </OptionsHolder>
    </Container>
  )
}

export default VideoCard
