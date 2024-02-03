"use client";
import { useDashboard } from "@/hooks";
import AddIcon from "@mui/icons-material/Add";

import React from "react";
import { AddSensorModal, SensorCard, SpeedDial, Text } from "..";
import {
  StyledDashboardContainer,
  StyledDashboardSensorBox,
  StyledDashboardTitle,
} from "./styles";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const { handleAddSensorModal, isOpenModal, sensors } = useDashboard();

  const actions = [
    {
      name: "Agregar Regla",
      icon: <AddIcon onClick={() => handleAddSensorModal(true)} />,
    },
  ];

  return (
    <StyledDashboardContainer>
      <StyledDashboardTitle>Dashboard Esmart-Test</StyledDashboardTitle>
      <StyledDashboardSensorBox>
        {sensors.length === 0 ? (
          <Text>Aun no tienes sensores registrados.</Text>
        ) : (
          sensors.map((sensor) => {
            return <SensorCard key={sensor.id} sensorData={sensor} />;
          })
        )}
      </StyledDashboardSensorBox>
      <AddSensorModal
        isOpen={isOpenModal}
        handleClose={() => handleAddSensorModal(false)}
      />
      <SpeedDial actions={actions} />
    </StyledDashboardContainer>
  );
};

export default Dashboard;
