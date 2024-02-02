import { Box, Button, Link, Text } from "@/components";
import { useUserContext } from "@/hooks";
import React from "react";

interface Props {}

const SideBar: React.FC<Props> = () => {
  const { user } = useUserContext();

  return (
    <Box
      width="25%"
      height="auto"
      sx={{ backgroundColor: "#2A3F54", padding: "30px" }}
    >
      <Box>
        <Text
          fontSize="2rem"
          alignSelf="center"
          fontWeight="700"
          sx={{ color: "#FFF" }}
        >
          Menu
        </Text>
        <Text
          fontSize="1.25rem"
          alignSelf="center"
          fontWeight="700"
          sx={{ color: "#FFF" }}
        >
          Usuario: {user?.username}
        </Text>
      </Box>
      <Box gap="20px" justifyContent="center" height="100%">
        <Button>
          <Link href="/dashboard">
            <Text sx={{ color: "#FFF" }}>Home</Text>
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default SideBar;
