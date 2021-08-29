import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 0.4rem;
`
export const Counter = styled.span`
  font-size: 1.6rem;
  color: ${(props) => props.theme.hover};
  font-weight: bolder;
  opacity: 0.3;
`
