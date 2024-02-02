import styled from '@emotion/styled';
import { Drawer } from '@mui/material';

export const StyledDrawer = styled(({ ...otherProps }) => <Drawer {...otherProps} />)`
  position: absolute;
  top: 57px;
  width: 40%;
  height: 100vh;
  transition: all 0.5 ease-out;
`;
