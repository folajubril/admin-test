/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import axiosApi from '@services/axiosApi';

type Response = {
  statusCode: string;
  message: string;
  data: any;
};

export const QUERY_GET_PRODUCT = 'Get product';

const getOneProduct =(
    id?: number,
) => {
  const response = axiosApi.get(`https://api.escuelajs.co/api/v1/products/${id}`);
  return response;
};

const useGetProduct = (id? :number) => {
  const { data, ...queryDProps } = useQuery<
    AxiosResponse<any>,
    AxiosError
  >([QUERY_GET_PRODUCT, id], () => getOneProduct(id), {
    enabled: true,
    refetchOnWindowFocus: false,
  });
  return { data: data, ...queryDProps };
};

export default useGetProduct;
