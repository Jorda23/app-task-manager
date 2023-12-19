import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6172cfe5110a740017222e2b.mockapi.io',
  }),
  endpoints: (builder) => ({
    getElements: builder.query<any, void>({
      query: () => 'elements',
      keepUnusedDataFor: 0, // Establece a 0 para deshabilitar el caché
    }),
  }),
});

export const { useGetElementsQuery } = api;
