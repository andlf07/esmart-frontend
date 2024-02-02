import { config } from "@/consts";
import { useRouter } from "next/navigation";
import React from "react";
import { useAxios, useNotification, useUserContext } from ".";

const useCreateUser = () => {
  const { requests } = useAxios();
  const { handleUserName } = useUserContext();
  const { notification } = useNotification();
  const router = useRouter();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleCreateUser = async (username: string): Promise<any> => {
    setLoading(true);
    return requests({
      method: "POST",
      url: config.USERS_ENDPOINT,
      data: {
        username,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        notification("Usuario registrado sastifactoriamente.", {
          variant: "success",
        });
        handleUserName(res.data.data);
        router.push("/dashboard");
      })
      .catch((error) => {
        notification("Hubo un error al registrar el usuario.", {
          variant: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return {
    handleCreateUser,
    loading,
  };
};

export default useCreateUser;
