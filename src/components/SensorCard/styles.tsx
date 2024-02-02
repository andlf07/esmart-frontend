import styled from "@emotion/styled";
import { Box } from "..";

export const StyledSensorCardBox = styled(({ ...otherProps }) => (
  <Box {...otherProps} />
))`
  width: 300px;
  height: 100px;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  justify-content: space-between;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.2);
  :hover {
    box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.5);
  }
`;
