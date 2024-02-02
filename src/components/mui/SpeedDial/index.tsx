import {
  SpeedDial as MuiSpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import { Box } from "..";

interface Props {
  actions: Action[];
}

interface Action {
  name: string;
  icon: any;
}

const SpeedDial: React.FC<Props> = ({ actions }) => {
  return (
    <Box
      sx={{
        height: "auto",
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        bottom: 16,
        right: 16,
      }}
    >
      <MuiSpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        FabProps={{
          sx: {
            backgroundColor: "blue",
            "&:hover": {
              backgroundColor: "#5da5e8",
            },
          },
        }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </MuiSpeedDial>
    </Box>
  );
};

export default SpeedDial;
