import { config } from "@/consts";
import { CreateRule } from "@/models/CreateRule";
import React from "react";
import { useAxios, useNotification, useUserContext } from ".";

const useCreateRule = () => {
  const { requests } = useAxios();
  const { sensorView, handleSensorView } = useUserContext();
  const { notification } = useNotification();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleCreateRule = async (data: CreateRule): Promise<any> => {
    setLoading(true);
    return requests({
      method: "POST",
      url: config.USER_RULES_ENDPOINT,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        notification("Regla registrada sastifactoriamente.", {
          variant: "success",
        });

        handleSensorView({
          ...sensorView,
          rules: [...sensorView?.rules, res.data.data],
        });
      })
      .catch((error) => {
        notification("Hubo un error al registrar la regla.", {
          variant: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return {
    handleCreateRule,
    loading,
  };
};

export default useCreateRule;
