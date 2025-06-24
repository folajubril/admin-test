/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import axiosApi from '@services/axiosApi';

type Response = {
  statusCode: string;
  message: string;
  data: any;
};

export const QUERY_GET_CATEGORIES = 'Get categories';

const getProduct =(
) => {
  const response = axiosApi.get(`https://api.escuelajs.co/api/v1/categories`);
  return response;
};

const useGetAllProductsCategories = () => {
  const { data, ...queryDProps } = useQuery<
    AxiosResponse<any>,
    AxiosError
  >([QUERY_GET_CATEGORIES], () => getProduct(), {
    enabled: true,
    refetchOnWindowFocus: false,
  }); 
  return { data: data?.data, ...queryDProps };
};

export default useGetAllProductsCategories;
