import styled from "styled-components"
import { FileInput, Form } from "../../form"

export const Container = styled.div`
  margin: 0 0.8rem;
`

export const MediaForm = styled(Form)`
  color: ${(props) =>
    props.disabled === false
      ? props.theme.complementary
      : props.theme.complementary + "3d"};
  display: flex;
  align-items: center;
`

export const MediaInput = styled(FileInput)`
  display: ${(props) => props.display};
`
