import { Sensor } from "@/models/Sensor";
import { User } from "@/models/User";
import { createContext, Dispatch, SetStateAction } from "react";

interface UserContextInitialState {
  user: User | null;
  dispatchUser: Dispatch<SetStateAction<User | null>>;
  sensors: Sensor[];
  dispatchSensors: Dispatch<SetStateAction<Sensor[]>>;
  sensorView: Sensor;
  dispatchSensorView: Dispatch<SetStateAction<Sensor>>;
}

export const userContextInitialState: UserContextInitialState = {
  user: null,
  dispatchUser: () => {},
  sensors: [],
  dispatchSensors: () => {},
  sensorView: {
    createdAt: "",
    enabled: false,
    id: "",
    rules: [],
    telemetryRecords: [],
    topic: "",
    updatedAt: "",
    user_id: "",
  },
  dispatchSensorView: () => {},
};

export const UserContext = createContext<UserContextInitialState>(
  userContextInitialState
);
