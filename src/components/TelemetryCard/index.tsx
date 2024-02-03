"use client";
import { formatteDateWithHourAndSeconds } from "@/libs/formatteDateWithHourAndSeconds";
import { Telemetry } from "@/models/Telemetry";
import React from "react";
import { Text } from "..";
import {
  StyledTelemetryCardBox,
  StyledTelemetryCardPropertyBox,
  StyledTelemetryCardPropertyText,
} from "./styles";

interface Props {
  telemetryData: Telemetry;
}

const TelemetryCard: React.FC<Props> = ({ telemetryData }) => {
  const sensorKeys = Object.keys(telemetryData);
  const skipKeys = sensorKeys.filter(
    (key) =>
      !["id", "updatedAt", "createdAt", "enabled", "sensor_id"].includes(key)
  );

  return (
    <StyledTelemetryCardBox>
      {skipKeys.map((key, index: number) => {
        let keyValue = telemetryData[key as keyof Telemetry];

        if (key === "timestamp")
          keyValue = formatteDateWithHourAndSeconds(keyValue);

        return (
          <StyledTelemetryCardPropertyBox key={index}>
            <StyledTelemetryCardPropertyText>
              {key}:
            </StyledTelemetryCardPropertyText>
            <Text fontSize="1.25rem" fontWeight="500">
              {keyValue}
            </Text>
          </StyledTelemetryCardPropertyBox>
        );
      })}
    </StyledTelemetryCardBox>
  );
};

export default TelemetryCard;
