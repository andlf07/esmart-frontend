import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { Text } from "..";

export const StyledDashboardSensorBox = styled(({ ...otherProps }) => (
  <Stack {...otherProps} />
))`
  padding: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`;

export const StyledDashboardContainer = styled(({ ...otherProps }) => (
  <Stack {...otherProps} />
))`
  width: 100%;
  margin-top: 30px;
  height: 100vh;
`;

export const StyledDashboardTitle = styled(({ ...otherProps }) => (
  <Text {...otherProps} />
))`
  font-size: 2rem;
  font-weight: 700;
  align-self: center;
`;
