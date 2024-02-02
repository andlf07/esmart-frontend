"use client";
import { useGetSensor } from "@/hooks";
import AddIcon from "@mui/icons-material/Add";
import { Divider } from "@mui/material";
import React from "react";
import { Box, RuleCard, SpeedDial, Spinner, TelemetryCard, Text } from "..";
import AddRuleModal from "../AddRuleModal";

interface Props {}

const Sensor: React.FC<Props> = () => {
  const { loading, sensorView: data } = useGetSensor();

  const [isOpenRuleModal, setIsOpenRuleModal] = React.useState<boolean>(false);

  const handleAddRuleModal = (value: boolean) => setIsOpenRuleModal(value);

  const actions = [
    {
      name: "Agregar Regla",
      icon: <AddIcon onClick={() => handleAddRuleModal(true)} />,
    },
  ];

  return (
    <>
      {loading ? (
        <Spinner
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        />
      ) : (
        <Box width="100%" height="100vh" alignItems="center" padding="30px">
          <Box marginTop="30px" width="100%" gap="50px">
            <Box direction="row" gap="20px">
              <Text fontSize="1.5rem" fontWeight="700">
                Topic:{" "}
              </Text>

              <Text fontSize="1.5rem" fontWeight="700">
                {data?.topic}
              </Text>
            </Box>

            <Divider orientation="horizontal" />

            <Box gap="30px">
              <Text fontSize="1.25rem" fontWeight="700">
                Rules
              </Text>
              <Box direction="row" gap="20px" flexWrap="wrap">
                {data?.rules.length === 0 && (
                  <Text>Aun no tienes reglas registradas.</Text>
                )}
                {data?.rules.map((rule) => {
                  return <RuleCard key={rule.id} rule={rule} />;
                })}
              </Box>
            </Box>
            <Divider orientation="horizontal" />

            <Box gap="30px">
              <Text fontSize="1.25rem" fontWeight="700">
                Telemetry
              </Text>
              <Box direction="row" gap="20px" flexWrap="wrap">
                {data?.telemetryRecords.length === 0 && (
                  <Text>Aun no tienes telemetry registrada.</Text>
                )}
                {data?.telemetryRecords.map((telemetry) => {
                  return (
                    <TelemetryCard
                      key={telemetry.id}
                      telemetryData={telemetry}
                    />
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      <AddRuleModal
        sensorId={data?.id}
        handleClose={() => handleAddRuleModal(false)}
        isOpen={isOpenRuleModal}
      />

      <SpeedDial actions={actions} />
    </>
  );
};

export default Sensor;
