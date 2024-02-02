import { Rules } from "./Rules";
import { Telemetry } from "./Telemetry";
import { User } from "./User";

export interface Sensor {
  id: string;
  topic: string;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
  user_id: string;
  user?: User;
  rules: Rules[];
  telemetryRecords: Telemetry[];
}
