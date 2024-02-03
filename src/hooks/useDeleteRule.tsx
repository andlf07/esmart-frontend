import { config } from "@/consts";
import React from "react";
import { useAxios, useNotification, useUserContext } from ".";

const useDeleteRule = () => {
  const { requests } = useAxios();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { handleSensorView, sensorView } = useUserContext();
  const { notification } = useNotification();

  const handleDeleteRule = async (ruleId: string) => {
    setIsLoading(true);
    return requests({
      url: config.USER_RULES_ENDPOINT + `/${ruleId}`,
      method: "DELETE",
    })
      .then(() => {
        notification("Regla eliminada sastifactoriamente.", {
          variant: "success",
        });
        const deleteSensor = sensorView.rules.filter(
          (rule) => rule.id !== ruleId
        );
        handleSensorView({
          ...sensorView,
          rules: deleteSensor,
        });
      })
      .catch(() => {
        notification("Algo ocurrio mal al elminar la regla.", {
          variant: "error",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    handleDeleteRule,
  };
};

export default useDeleteRule;
