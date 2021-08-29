import React from "react"
import VideoCard from "../cards/video"
import ImageCard from "../cards/image"

import { Column, Container, GridContainer } from "./styles"

function GalleryGrid({ posts }) {
  const BlobCard = ({ post }) => {
    return post?.is_image ? (
      <ImageCard key={post.id} src={post.src} dimensions={post.dimensions} />
    ) : (
      <VideoCard key={post.id} src={post.src} />
    )
  }

  return (
    <Container>
      <GridContainer>
        <Column>
          {posts.length > 0 &&
            posts.slice(0, 5).map((post) => <BlobCard post={post} />)}
        </Column>
        <Column>
          {posts.length > 0 &&
            posts.slice(5, 10).map((post) => <BlobCard post={post} />)}
        </Column>
        <Column>
          {posts.length > 0 &&
            posts.slice(10, 15).map((post) => <BlobCard post={post} />)}
        </Column>
        <Column>
          {posts.length > 0 &&
            posts.slice(15, 20).map((post) => <BlobCard post={post} />)}
        </Column>
        <Column>
          {posts.length > 0 &&
            posts.slice(20, 25).map((post) => <BlobCard post={post} />)}
        </Column>
        <Column>
          {posts.length > 0 &&
            posts.slice(25, 30).map((post) => <BlobCard post={post} />)}
        </Column>
      </GridContainer>
    </Container>
  )
}

export default GalleryGrid
