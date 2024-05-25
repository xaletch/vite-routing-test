import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

function getCookieValue(name: string) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

export const crm = createApi({
  reducerPath: "crm",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://h163879.srv11.test-hf.su/crm-loc/api",
    prepareHeaders: (headers) => {
      const token = getCookieValue("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    // Регистрация
    fetchRegistration: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body: body,
      }),
    }),
    // Авторизация
    fetchAuthorization: builder.mutation({
      query: (body) => ({
        url: "/auth/auth",
        method: "POST",
        body: body,
      }),
    }),
    // Информация о пользователе
    getUserInfo: builder.query({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
    }),
    // Восстановление пароля
    fetchRecoveryPassword: builder.mutation({
      query: (body) => ({
        url: "/auth/pass_recover",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const {
  // Регистрация
  useFetchRegistrationMutation,
  // Авторизация
  useFetchAuthorizationMutation,
  // Информация о пользователе
  useGetUserInfoQuery,
  // Восстановление пароля
  useFetchRecoveryPasswordMutation,
} = crm;
