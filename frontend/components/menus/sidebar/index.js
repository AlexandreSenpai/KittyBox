import React, { useContext } from "react"
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
        <ListItem>
          <GalleryIcon fontSize={"large"} />
          Gallery
        </ListItem>
        <ListItem>
          <BookmarkIcon fontSize={"large"} />
          Bookmarks
        </ListItem>
        <ListItem>
          <ProfileIcon fontSize={"large"} />
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
