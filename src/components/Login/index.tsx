"use client";
import { useLogin } from "@/hooks";
import React from "react";
import {
  Box,
  Button,
  FormInputController,
  Layout,
  RegisterUser,
  Spinner,
  Text,
} from "..";
import { StyledLoginContainer } from "./styles";

interface Props {}

const Login: React.FC<Props> = () => {
  const { control, errors, handleSubmit, loading, onSubmit } = useLogin();

  return (
    <Layout>
      {loading ? (
        <Spinner
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        />
      ) : (
        <Box
          width="100%"
          height="100vh"
          alignItems="center"
          justifyContent="center"
        >
          <StyledLoginContainer>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              gap="20px"
              alignSelf="center"
            >
              <Box>
                <Text fontSize="1.35rem" fontWeight="700" variant="h1">
                  Ingresa con tu username
                </Text>
              </Box>
              <Box>
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
                {errors.username && (
                  <Text sx={{ color: "red", fontSize: "0.85rem" }}>
                    {errors.username.message}
                  </Text>
                )}
              </Box>
              <Button type="submit">Ingresar</Button>
            </Box>
            <RegisterUser />
          </StyledLoginContainer>
        </Box>
      )}
    </Layout>
  );
};

export default Login;
