import { useRouter } from "next/navigation";
import React from "react";
import { useUserContext } from ".";

const useLayoutDashboard = () => {
  const { user } = useUserContext();

  const router = useRouter();

  React.useEffect(() => {
    if (user === null) router.push("/");
  }, []);
};

export default useLayoutDashboard;
