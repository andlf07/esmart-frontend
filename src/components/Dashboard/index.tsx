"use client";
import { useUserContext } from "@/hooks";
import AddIcon from "@mui/icons-material/Add";

import React from "react";
import { AddSensorModal, Box, SensorCard, SpeedDial, Text } from "..";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const { sensors } = useUserContext();

  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

  const handleAddSensorModal = (value: boolean) => setIsOpenModal(value);

  const actions = [
    {
      name: "Agregar Regla",
      icon: <AddIcon onClick={() => handleAddSensorModal(true)} />,
    },
  ];

  return (
    <Box width="60%" marginTop="30px" height="100vh">
      <Text fontSize="2rem" fontWeight="700" alignSelf="center">
        Dashboard Esmart-Test
      </Text>
      <Box
        padding="30px"
        direction="row"
        flexWrap="wrap"
        gap="20px"
        width="100%"
      >
        {sensors.length === 0 ? (
          <Text>Aun no tienes sensores registrados.</Text>
        ) : (
          sensors.map((sensor) => {
            return <SensorCard key={sensor.id} sensorData={sensor} />;
          })
        )}
      </Box>
      <AddSensorModal
        isOpen={isOpenModal}
        handleClose={() => handleAddSensorModal(false)}
      />
      <SpeedDial actions={actions} />
    </Box>
  );
};

export default Dashboard;
