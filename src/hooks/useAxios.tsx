import axios, { AxiosResponse } from 'axios';

interface RequestParams {
  url: string;
  method: string;
  data?: any;
  headers?: any;
}

export const useAxios = () => {
  const requests = async (requests: RequestParams): Promise<AxiosResponse> => {
    return await axios({
      url: requests.url,
      data: requests.data,
      method: requests.method,
      headers: {
        'Content-Type': 'application/json',
        ...requests.headers,
      },
    });
  };

  return {
    requests,
  };
};

export default useAxios;
