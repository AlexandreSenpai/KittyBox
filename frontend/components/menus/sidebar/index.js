import React, { useCallback, useContext, useEffect, useState } from "react"
import Avatar from "../../user/avatar"
import { signIn, signOut } from "next-auth/client"
import { AuthContext } from "../../../contexts/auth"

import {
  BookmarkIcon,
  Container,
  Divider,
  GalleryIcon,
  List,
  ListItem,
  SessionButton,
  ProfileIcon,
  UserEmail,
  UserInformationHolder,
  UserName,
  UserNameHolder,
} from "./styles"

const Sidebar = () => {
  const { userSession } = useContext(AuthContext)
  const [currentPage, setCurrentPage] = useState("gallery")

  const setPage = useCallback((targetPage) => {
    setCurrentPage((prevPage) =>
      prevPage === targetPage ? currentPage : targetPage
    )
  }, [])

  return (
    <Container>
      <UserInformationHolder>
        <Avatar src={userSession?.user?.image} />
        <UserNameHolder>
          <UserName>{userSession?.user?.name}</UserName>
          <UserEmail>{userSession?.user?.email}</UserEmail>
        </UserNameHolder>
      </UserInformationHolder>
      <Divider />
      <List>
        <ListItem onClick={() => setPage("gallery")}>
          <GalleryIcon fontSize={"large"} currentPage={currentPage} />
          Gallery
        </ListItem>
        <ListItem onClick={() => setPage("bookmark")}>
          <BookmarkIcon fontSize={"large"} currentPage={currentPage} />
          Bookmarks
        </ListItem>
        <ListItem onClick={() => setPage("profile")}>
          <ProfileIcon fontSize={"large"} currentPage={currentPage} />
          Profile
        </ListItem>
      </List>
      {!userSession && (
        <SessionButton onClick={() => signIn("google")}>Entrar</SessionButton>
      )}
      {userSession && (
        <SessionButton opacity={0.3} onClick={signOut}>
          Sair
        </SessionButton>
      )}
    </Container>
  )
}

export default Sidebar
