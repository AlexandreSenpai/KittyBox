import React, { useCallback, useState, useRef, useEffect, useMemo } from "react"
import VideoCard from "../cards/video"
import ImageCard from "../cards/image"
import useScroller from "../../hooks/useInfinite"
import Link from "next/link"

import { Column, Container, GridContainer } from "./styles"

function GalleryGrid({ posts, path, aditional_body }) {
  const [offset, setOffset] = useState(undefined)
  const [cols, setCols] = useState([[], [], [], [], [], []])
  const observer = useRef(null)
  const { doujins, error, hasMore, loading, notFound } = useScroller(
    offset,
    path,
    { params: { offset: offset, ...aditional_body } }
  )

  const memoizedResult = useMemo(() => {
    const colsCopy = cols
    let counter = 0
    Array.from(doujins).forEach((doujin) => {
      cols[counter].push(doujin)
      counter++
      if (counter >= cols.length) {
        counter = 0
      }
    })

    setCols(colsCopy)

    return colsCopy
  }, [doujins, posts])

  const get_last_div = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setOffset(Array.from(doujins)[doujins.size - 1][0])
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )

  const BlobCard = ({ post }) => {
    return post?.is_image ? (
      <Link href="/t">
        <ImageCard
          ref={get_last_div}
          key={post.id}
          src={post.src}
          dimensions={post.dimensions}
          author={post.author}
          created_at={post.created_at}
          title={post.name}
        />
      </Link>
    ) : (
      <VideoCard key={post.id} src={post.src} />
    )
  }

  return (
    <Container>
      <GridContainer>
        <Column>
          {memoizedResult.length > 0 &&
            memoizedResult[0].map(([postId, post]) => {
              return <BlobCard post={post} />
            })}
        </Column>
        <Column>
          {memoizedResult.length > 0 &&
            memoizedResult[1].map(([postId, post]) => {
              return <BlobCard post={post} />
            })}
        </Column>
        <Column>
          {memoizedResult.length > 0 &&
            memoizedResult[2].map(([postId, post]) => {
              return <BlobCard post={post} />
            })}
        </Column>
        <Column>
          {memoizedResult.length > 0 &&
            memoizedResult[3].map(([postId, post]) => {
              return <BlobCard post={post} />
            })}
        </Column>
        <Column>
          {memoizedResult.length > 0 &&
            memoizedResult[4].map(([postId, post]) => {
              return <BlobCard post={post} />
            })}
        </Column>
        <Column>
          {memoizedResult.length > 0 &&
            memoizedResult[5].map(([postId, post]) => {
              return <BlobCard post={post} />
            })}
        </Column>
      </GridContainer>
    </Container>
  )
}

export default GalleryGrid
