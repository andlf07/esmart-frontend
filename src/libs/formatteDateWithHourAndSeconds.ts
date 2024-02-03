import dayjs from "dayjs";

export const formatteDateWithHourAndSeconds = (data: any) => {
  return dayjs(data).format("DD/MM/YYYY HH:mm:ss.SSS");
};
