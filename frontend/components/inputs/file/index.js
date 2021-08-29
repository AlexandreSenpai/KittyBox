import React, { useCallback, useContext, useState } from "react"
import axios from "axios"
import { AuthContext } from "../../../contexts/auth"
import { signIn } from "next-auth/client"

import { Container, MediaForm, MediaInput } from "./styles"

function File() {
  const { userSession } = useContext(AuthContext)

  const handlePreview = async (e) => {
    const file = e.target.files?.[0]

    console.log(file)
    const formData = new FormData()
    formData.append("userId", userSession.id)
    formData.append("file", file)

    const submit = await axios.post(
      "http://localhost:3333/create/blob",
      formData
    )
    console.log(submit)
  }

  const redirectIfNotLoggedIn = () => {
    if (!userSession) {
      signIn("google")
    }
  }

  return (
    <Container>
      <MediaForm disabled={!userSession} onClick={redirectIfNotLoggedIn}>
        <MediaInput
          name="blob"
          onChange={handlePreview}
          disabled={!userSession}
        />
      </MediaForm>
    </Container>
  )
}

export default File
