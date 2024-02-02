import { config } from "@/consts";
import { useRouter } from "next/navigation";
import React from "react";
import { useAxios, useNotification, useUserContext } from ".";

const useAuthLogin = () => {
  const { requests } = useAxios();
  const { handleUserName, handleSensors } = useUserContext();
  const { notification } = useNotification();
  const router = useRouter();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleAuthLogin = async (username: string): Promise<any> => {
    setLoading(true);
    return requests({
      method: "POST",
      url: config.LOGIN_ENDPOINT,
      data: {
        username,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        const { sensors, ...rest } = res.data.data;
        handleUserName(rest);
        handleSensors(sensors);
        router.push("/dashboard");
      })
      .catch((error) => {
        if (error.response.data.statusCode === 401)
          return notification(
            "Hubo un error al hacer login. Username no existe.",
            {
              variant: "error",
            }
          );
        notification("Hubo un error al hacer login.", {
          variant: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    handleAuthLogin,
    loading,
  };
};

export default useAuthLogin;
