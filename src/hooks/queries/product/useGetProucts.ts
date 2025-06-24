/* eslint-disable @typescript-eslint/no-explicit-any */

import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import axiosApi from '@services/axiosApi';

type Response = {
  statusCode: string;
  message: string;
  data: Array<any>;
};

export const QUERY_GET_ALL_PRODUCTS = 'Get all products';

const getAllProducts =() => {
  const response = axiosApi.get('https://api.escuelajs.co/api/v1/products');
  return response;
};

const useGetProducts = () => {
  const { data, ...queryDProps } = useQuery<
    AxiosResponse<Response>,
    AxiosError
  >([QUERY_GET_ALL_PRODUCTS], () => getAllProducts(), {
    enabled: true,
    cacheTime: 10000,
    staleTime: 10000,
    refetchInterval: 300000,
    refetchOnWindowFocus: false,
  });
  return { data: data?.data, ...queryDProps };
};

export default useGetProducts;
