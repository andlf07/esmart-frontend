import { config } from "@/consts";
import { useParams } from "next/navigation";
import React from "react";
import { useAxios, useNotification, useUserContext } from ".";

const useGetSensor = () => {
  const params = useParams();
  const { requests } = useAxios();
  const { handleSensorView, sensorView } = useUserContext();
  const { notification } = useNotification();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleGetSensor = async (): Promise<void> => {
    setLoading(true);
    return requests({
      method: "GET",
      url: config.SENSORS_ENDPOINT + `/${params.id}`,
    })
      .then((res) => {
        handleSensorView(res.data.data);
      })
      .catch((error) => {
        notification("Hubo un error al obtener el Sensor.", {
          variant: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    handleGetSensor();
  }, []);

  return {
    handleGetSensor,
    loading,
    sensorView,
  };
};

export default useGetSensor;
