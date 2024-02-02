import dayjs from "dayjs";

export const formatteDate = (data: any) => {
  return dayjs(data).format("DD/MM/YYYY");
};
