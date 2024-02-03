"use client";
import useBulletMenu from "@/hooks/useBulletMenu";
import useDeleteSensor from "@/hooks/useDeleteSensor";
import { formatteDate } from "@/libs/formatteDate";
import { Sensor } from "@/models/Sensor";
import { MenuItem } from "@mui/material";
import React from "react";
import { Box, BulletMenu, Link, Text } from "..";
import { StyledSensorCardBox } from "./styles";

interface Props {
  sensorData: Sensor;
}

const SensorCard: React.FC<Props> = ({ sensorData }) => {
  const bulletMenuHandlers = useBulletMenu();
  const { handleDeleteSensor } = useDeleteSensor();

  const handleOnClickDeleteMenu = () => {
    handleDeleteSensor(sensorData.id);
    bulletMenuHandlers.handleClose();
  };

  return (
    <StyledSensorCardBox>
      <Box gap="20px">
        <Box direction="row" justifyContent="space-between">
          <Link href={`/dashboard/sensors/${sensorData.id}`}>
            <Text sx={{ fontSize: "1.5rem", fontWeight: "700" }}>
              {sensorData.topic}
            </Text>
          </Link>

          <BulletMenu handlers={bulletMenuHandlers}>
            <MenuItem onClick={handleOnClickDeleteMenu}>Elminar</MenuItem>
          </BulletMenu>
        </Box>
        <Link href={`/dashboard/sensors/${sensorData.id}`}>
          <Box direction="row" gap="20px">
            <Text sx={{ fontSize: "1rem", fontWeight: "500" }}>
              Registrado:
            </Text>

            <Text sx={{ fontSize: "1rem", fontWeight: "500" }}>
              {formatteDate(sensorData.createdAt)}
            </Text>
          </Box>
        </Link>
      </Box>
    </StyledSensorCardBox>
  );
};

export default SensorCard;
