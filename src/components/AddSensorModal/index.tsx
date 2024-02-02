"use client";
import { useAddSensor } from "@/hooks";
import React from "react";
import { Box, Button, FormInputController, Modal, Spinner, Text } from "..";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const AddSensorModal: React.FC<Props> = ({ isOpen, handleClose }) => {
  const { control, handleSubmit, loading, onSubmit } = useAddSensor();

  return (
    <Modal open={isOpen} onClose={handleClose}>
      {loading ? (
        <Spinner
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        />
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          alignItems="center"
          justifyContent="space-around"
          height="100%"
        >
          <Box>
            <Text fontSize="2rem" fontWeight="600" textAlign="center">
              Registrar
            </Text>
            <Text fontSize="1.1rem" textAlign="center">
              Ingresa un topic unico para tu sensor.
            </Text>
          </Box>
          <Box
            width="50%"
            gap="20px"
            height="50%"
            justifyContent="space-between"
          >
            <FormInputController
              options={{
                required: {
                  message: "Topic is required.",
                  value: true,
                },
              }}
              control={control}
              name="topic"
              label="Topic"
              type="text"
            />
            <Button type="submit">Register</Button>
          </Box>
        </Box>
      )}
    </Modal>
  );
};

export default AddSensorModal;
