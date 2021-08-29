import styled from "styled-components"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import FavoriteIcon from "@material-ui/icons/Favorite"

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 0.4rem;
`

export const LikeIconUnselected = styled(FavoriteBorderIcon)`
  color: ${(props) => props.theme.hover};

  :hover {
    color: ${(props) => props.theme.interactions.like};
    cursor: pointer;
  }
`

export const LikeIconSelected = styled(FavoriteIcon)`
  color: ${(props) => props.theme.hover};

  :hover {
    color: ${(props) => props.theme.complementary};
    cursor: pointer;
  }
`
