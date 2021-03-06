import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.background.card};
  margin: 1rem 0;
  padding: 0.2rem;
  border-radius: 0.3rem;
`

export const Video = styled.video``

export const VideoHolder = styled.div`
  width: 100%;
`

export const OptionsHolder = styled.div`
  width: 100%;
  height: 3rem;
  padding: 0.4rem;
  display: flex;
  align-items: center;
`
