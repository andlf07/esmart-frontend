"use client";
import { UserContextProvider } from "@/contexts";
import React from "react";
import { CustomSnackbarProvider } from "..";

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <CustomSnackbarProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </CustomSnackbarProvider>
  );
};

export default Providers;
