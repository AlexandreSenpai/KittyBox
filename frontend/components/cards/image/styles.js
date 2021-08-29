import styled from "styled-components"
import NextImage from "next/image"

export const AuthorInformationHolder = styled.div`
  width: 100%;
  height: 80%;
  background: linear-gradient(to top, transparent 0%, black 150%);
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.4rem;
  display: flex;
  opacity: 0;

  transition: 200ms ease-in;
`
export const AuthorInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
`
export const AuthorInformationWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  align-items: center;
`
export const AuthorName = styled.p`
  font-weight: bolder;
  font-size: 1.2rem;
`
export const PostTitle = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 15rem;
`
export const CreatedDate = styled.p`
  opacity: 0.5;
`

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.background.card};
  margin: 1rem 0;
  padding: 0.2rem;
  border-radius: 0.3rem;
  position: relative;

  :hover ${AuthorInformationHolder} {
    opacity: 1;
    cursor: pointer;
  }
`
export const Image = styled(NextImage)``

export const ImageHolder = styled.div`
  width: 100%;
`

export const OptionsHolder = styled.div`
  width: 100%;
  height: 3rem;
  padding: 0.4rem;
  display: flex;
  align-items: center;
`
