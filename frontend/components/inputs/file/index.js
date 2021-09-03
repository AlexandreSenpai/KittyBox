import React, { useCallback, useContext, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { AuthContext } from "../../../contexts/auth"
import { signIn } from "next-auth/client"
import CircularProgressWithLabel from "../../loaders/circularLabelled"
import { useSnackbar } from "notistack"

import { Container, MediaForm, MediaInput } from "./styles"

function File() {
  const { userSession } = useContext(AuthContext)
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()

  const handleUpload = async (e) => {
    const file = e.target.files?.[0]

    const formData = new FormData()
    formData.append("userId", userSession.id)
    formData.append("file", file)

    setIsUploading(true)
    const submit = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/create/blob`,
      formData,
      {
        onUploadProgress: (e) => {
          let progress = Math.round((e.loaded * 100) / e.total)
          setProgress(progress)
          if (progress >= 100) {
            setIsUploading(false)
            setProgress(0)
            enqueueSnackbar(
              "Processing the file. When it's done we're notify you.",
              {
                variant: "info",
              }
            )
          }
        },
      }
    )
    if (submit.status == 201) {
      enqueueSnackbar(
        `Your post is now available. \nClick in this notification to navigate. \nPost id: ${submit.data?.postId}`,
        {
          variant: "success",
          onClick: () => {
            router.push("/b/" + submit.data?.postId)
          },
        }
      )
    }
  }

  const redirectIfNotLoggedIn = () => {
    if (!userSession) {
      signIn("google")
    }
  }

  return (
    <Container>
      <MediaForm disabled={!userSession} onClick={redirectIfNotLoggedIn}>
        {!isUploading ? (
          <MediaInput
            name="blob"
            onChange={handleUpload}
            disabled={!userSession}
          />
        ) : (
          <CircularProgressWithLabel progress={progress} />
        )}
      </MediaForm>
    </Container>
  )
}

export default File
