import styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const StyledAddRuleModalFieldsBox = styled(({ ...otherProps }) => (
  <Stack {...otherProps} />
))`
  width: 70%;
  gap: 30px;
  height: 80%;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 10px;
`;
