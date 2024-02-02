export interface Telemetry {
  id: string;
  timestamp: number;
  temperature: number;
  humidity: number;
  flow: number;
  pressure: number;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
  sensor_id: string;
}
