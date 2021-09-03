import styled from "styled-components"
import CircularProgress from "@material-ui/core/CircularProgress"

export const LabelledLoader = styled(CircularProgress)`
  svg {
    color: ${(props) => props.theme.complementary};
  }
`
