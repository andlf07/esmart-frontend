"use client";
import { useLayoutDashboard } from "@/hooks";
import React from "react";
import { Box, Layout, SideBar } from "..";

interface Props {
  children: React.ReactNode;
}

const LayoutDashboard: React.FC<Props> = ({ children }) => {
  useLayoutDashboard();
  return (
    <Layout>
      <Box direction="row" width="100%">
        <SideBar />
        {children}
      </Box>
    </Layout>
  );
};

export default LayoutDashboard;
