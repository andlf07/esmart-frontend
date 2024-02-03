import { config } from "@/consts";
import React from "react";
import { useAxios, useNotification, useUserContext } from ".";

const useDeleteSensor = () => {
  const { requests } = useAxios();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { handleSensors, sensors } = useUserContext();
  const { notification } = useNotification();

  const handleDeleteSensor = async (sensorId: string) => {
    setIsLoading(true);
    return requests({
      url: config.SENSORS_ENDPOINT + `/${sensorId}`,
      method: "DELETE",
    })
      .then(() => {
        notification("Sensor eliminado sastifactoriamente.", {
          variant: "success",
        });
        const deleteSensor = sensors.filter((sensor) => sensor.id !== sensorId);
        handleSensors(deleteSensor);
      })
      .catch(() => {
        notification("Algo ocurrio mal al elminar el sensor.", {
          variant: "error",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    handleDeleteSensor,
  };
};

export default useDeleteSensor;
