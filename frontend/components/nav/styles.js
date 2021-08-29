import styled from "styled-components"

export const Container = styled.div`
  width: calc(100% - 20rem);
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: ${(props) => props.theme.background.secondary};
  z-index: 999;

  > div {
    margin-right: 0.6rem;
  }
`
