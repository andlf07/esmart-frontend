import styled from "@emotion/styled";
import { Box } from "..";

export const StyledLoginContainer = styled(({ ...otherProps }) => (
  <Box {...otherProps} />
))`
  border: 1px solid blue;
  width: 30%;
  height: 80%;
  border: 2px solid #d3d3d3;
  align-items: center;
  gap: 20px;
  justify-content: center;
  padding: 30px;
  border-radius: 15px;
`;
