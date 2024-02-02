import { Sensor } from "@/models/Sensor";
import { User } from "@/models/User";
import React from "react";
import { UserContext, userContextInitialState } from ".";

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | null>(
    userContextInitialState.user
  );
  const [sensors, setSensors] = React.useState<Sensor[]>(
    userContextInitialState.sensors
  );

  const [sensorView, setSensorView] = React.useState<Sensor>(
    userContextInitialState.sensorView
  );
  return (
    <UserContext.Provider
      value={{
        user,
        dispatchUser: setUser,
        sensors,
        dispatchSensors: setSensors,
        sensorView,
        dispatchSensorView: setSensorView,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
