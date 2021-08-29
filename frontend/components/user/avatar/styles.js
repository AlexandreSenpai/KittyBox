import styled from "styled-components"

export const Container = styled.div`
  width: ${(props) => props.width || "8rem"};
  height: ${(props) => props.height || "8rem"};
`

export const RoundedHolder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 0.2rem solid ${(props) => props.theme.complementary};
  overflow: hidden;
`
export const UserImage = styled.img`
  width: 100%;
  height: 100%;
`
