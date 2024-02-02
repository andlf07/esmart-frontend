import { UserContext } from "@/contexts";
import { Sensor } from "@/models/Sensor";
import { User } from "@/models/User";
import React from "react";

const useUserContext = () => {
  const {
    user,
    dispatchUser,
    dispatchSensors,
    sensors,
    dispatchSensorView,
    sensorView,
  } = React.useContext(UserContext);

  const handleUserName = (user: User) => dispatchUser(user);

  const handleSensors = (sensors: Sensor[]) => dispatchSensors(sensors);

  const handleSensorView = (sensorView: Sensor) =>
    dispatchSensorView(sensorView);

  return {
    handleUserName,
    user,
    handleSensors,
    sensors,
    handleSensorView,
    sensorView,
  };
};

export default useUserContext;
