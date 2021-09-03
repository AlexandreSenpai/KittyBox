import React, { useEffect, useState, useContext } from "react"
import { api } from "../services/api"

export default function useInfinite(offset, route_path, body) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [doujins, setDoujins] = useState(new Set())
  const [hasMore, setHasMore] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    api.get(route_path, body).then((res) => {
      console.log(res.data)
      if (res.data.per_page > 0) {
        let new_doujins = res.data.posts.map((douj) => {
          return [douj.id, douj]
        })

        setDoujins(new Set([...new_doujins]))

        setLoading(false)
        setHasMore(true)
      } else {
        setHasMore(false)
        if (doujins.size === 0) {
          setNotFound(true)
        }
      }
    })
  }, [offset])

  return { loading, error, doujins, hasMore, notFound }
}
