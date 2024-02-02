import styled from "@emotion/styled";
import { Box, Text } from "..";

export const StyledTelemetryCardBox = styled(({ ...otherProps }) => (
  <Box {...otherProps} />
))`
  width: 300px;
  height: auto;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  justify-content: space-between;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.2);
  :hover {
    box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.5);
  }
`;

export const StyledTelemetryCardPropertyBox = styled(({ ...otherProps }) => (
  <Box {...otherProps} />
))`
  flex-direction: row;
  gap: 10px;
`;

export const StyledTelemetryCardPropertyText = styled(({ ...otherProps }) => (
  <Text {...otherProps} />
))`
  font-weight: 700;
  font-size: 1.25rem;
`;
