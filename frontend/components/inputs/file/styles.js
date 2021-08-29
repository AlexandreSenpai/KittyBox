import styled from "styled-components"
import { FileInput, Form } from "../../form"

export const Container = styled.div``

export const MediaForm = styled(Form)`
  color: ${(props) =>
    props.disabled === false
      ? props.theme.complementary
      : props.theme.complementary + "3d"};
`

export const MediaInput = styled(FileInput)``
