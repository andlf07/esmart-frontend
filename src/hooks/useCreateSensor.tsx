import { config } from "@/consts";
import React from "react";
import { useAxios, useNotification, useUserContext } from ".";

const useCreateSensor = () => {
  const { requests } = useAxios();
  const { user, sensors, handleSensors } = useUserContext();
  const { notification } = useNotification();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleCreateSensor = async (topic: string): Promise<any> => {
    setLoading(true);
    return requests({
      method: "POST",
      url: config.SENSORS_ENDPOINT,
      data: {
        topic,
        user_id: user?.id,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        notification("Sensor registrado sastifactoriamente.", {
          variant: "success",
        });
        handleSensors([...sensors, res.data.data]);
      })
      .catch((error) => {
        notification("Hubo un error al registrar el sensor.", {
          variant: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return {
    handleCreateSensor,
    loading,
  };
};

export default useCreateSensor;
