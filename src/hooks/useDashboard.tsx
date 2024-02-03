import React from "react";
import { useUserContext } from ".";

const useDashboard = () => {
  const { sensors } = useUserContext();

  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

  const handleAddSensorModal = (value: boolean) => setIsOpenModal(value);
  return { sensors, isOpenModal, handleAddSensorModal };
};

export default useDashboard;
