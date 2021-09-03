import styled from "styled-components"
import AccountBoxIcon from "@material-ui/icons/AccountBox"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import BookmarksIcon from "@material-ui/icons/Bookmarks"

export const Container = styled.aside`
  width: 20rem;
  min-height: 100vh;
  max-height: 100vh;
  position: fixed;
  background: ${(props) => props.theme.background.primary};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.2rem 0.6rem;
`

export const UserInformationHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const UserNameHolder = styled.div`
  margin: 1.6rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UserName = styled.p`
  font-weight: bolder;
  font-size: 1.6rem;
`
export const UserEmail = styled.p`
  opacity: 0.5;
`

export const List = styled.ul`
  width: 100%;
  list-style: none;
`

export const ListItem = styled.li`
  font-size: 1.6rem;
  padding: 1.6rem;
  display: flex;
  align-items: center;

  :hover {
    background: ${(props) => props.theme.hover};
    color: ${(props) => props.theme.complementary};
    cursor: pointer;
    border-radius: 0.3rem;
  }
`
export const Divider = styled.div`
  background: white;
  opacity: 0.1;
  height: 0.1rem;
  width: 50%;
  margin: 3.2rem;
`

export const ProfileIcon = styled(AccountBoxIcon)`
  color: ${(props) =>
    props.currentPage === "profile" ? props.theme.complementary : "inherit"};
  margin-right: 0.5rem;
`
export const GalleryIcon = styled(PhotoLibraryIcon)`
  color: ${(props) =>
    props.currentPage === "gallery" ? props.theme.complementary : "inherit"};
  margin-right: 0.5rem;
`
export const BookmarkIcon = styled(BookmarksIcon)`
  color: ${(props) =>
    props.currentPage === "bookmark" ? props.theme.complementary : "inherit"};
  margin-right: 0.5rem;
`
export const SessionButton = styled.button`
  background: ${(props) => props.theme.complementary};
  opacity: ${(props) => props.opacity};
  width: 80%;
  height: 4rem;
  border: none;
  border-radius: 0.3rem;
  text-align: center;
  font-weight: bolder;
  margin-top: auto;
  cursor: pointer;
  font-size: 1.6rem;
`
