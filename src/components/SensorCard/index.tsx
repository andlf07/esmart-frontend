"use client";
import { formatteDate } from "@/libs/formatteDate";
import { Sensor } from "@/models/Sensor";
import React from "react";
import { Box, Link, Text } from "..";
import { StyledSensorCardBox } from "./styles";

interface Props {
  sensorData: Sensor;
}

const SensorCard: React.FC<Props> = ({ sensorData }) => {
  return (
    <StyledSensorCardBox>
      <Link href={`/dashboard/sensors/${sensorData.id}`}>
        <Box gap="20px">
          <Text sx={{ fontSize: "1.5rem", fontWeight: "700" }}>
            {sensorData.topic}
          </Text>

          <Box direction="row" gap="20px">
            <Text sx={{ fontSize: "1rem", fontWeight: "500" }}>
              Registrado:
            </Text>

            <Text sx={{ fontSize: "1rem", fontWeight: "500" }}>
              {formatteDate(sensorData.createdAt)}
            </Text>
          </Box>
        </Box>
      </Link>
    </StyledSensorCardBox>
  );
};

export default SensorCard;
