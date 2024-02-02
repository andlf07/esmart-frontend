"use client";
import { useRegisterUser } from "@/hooks";
import React from "react";
import { Box, Button, FormInputController, Modal, Spinner, Text } from "..";

interface Props {}

const RegisterUser: React.FC<Props> = () => {
  const {
    control,
    errors,
    handleSubmit,
    onSubmit,
    handleRegisterModal,
    isOpenModal,
    loading,
  } = useRegisterUser();

  return (
    <Box>
      <Text
        sx={{
          textDecoration: "underline",
          fontSize: "0.85rem",
          color: "blue",
          ":hover": { cursor: "pointer" },
        }}
        onClick={() => handleRegisterModal(true)}
      >
        Registrar
      </Text>
      <Modal open={isOpenModal} onClose={() => handleRegisterModal(false)}>
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
                Register
              </Text>
              <Text fontSize="1.1rem" textAlign="center">
                Enter a valid username
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
                    message: "Username is required.",
                    value: true,
                  },
                }}
                control={control}
                name="username"
                label="Username"
                type="text"
              />
              <Button type="submit">Register</Button>
            </Box>
          </Box>
        )}
      </Modal>
    </Box>
  );
};

export default RegisterUser;
