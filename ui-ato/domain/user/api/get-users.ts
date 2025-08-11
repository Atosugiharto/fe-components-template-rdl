import { queryOptions, useQuery } from '@tanstack/react-query';

import { api } from "@/lib/api";
import type { TQueryConfig } from '@/lib/react-query';
import type { IUserProps, IUserQuery } from "../types/user"

const getUsers = (params: IUserQuery): Promise<{ data: IUserProps[]; }> => {
  return api.get(`/users`,{ params });
}

const getUsersOptions= (params: IUserQuery = {}) => {
  return queryOptions({
    queryKey: ['users', params],
    queryFn : () => getUsers(params),
  });
};

type UseDiscussionsOptions = {
  params?: IUserQuery;
  queryConfig?: TQueryConfig<typeof getUsersOptions>;
};

const useUsers = ({ params, queryConfig }: UseDiscussionsOptions) => {
  return useQuery({
    ...getUsersOptions(params),
    ...queryConfig
  });
}

export {
  useUsers,
  getUsers,
  getUsersOptions,
}