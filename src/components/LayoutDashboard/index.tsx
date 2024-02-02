"use client";
import { useUserContext } from "@/hooks";
import { useRouter } from "next/navigation";
import React from "react";
import { Box, Layout } from "..";
import { SideBar } from "../Dashboard/components";

interface Props {
  children: React.ReactNode;
}

const LayoutDashboard: React.FC<Props> = ({ children }) => {
  const { user } = useUserContext();

  const router = useRouter();

  React.useEffect(() => {
    if (user === null) router.push("/");
  }, []);
  return (
    <Layout>
      <Box direction="row" width="100%" height="100%">
        <SideBar />
        {children}
      </Box>
    </Layout>
  );
};

export default LayoutDashboard;
