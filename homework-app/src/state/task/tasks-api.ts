import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { Task } from "../../common/interface/Task"

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    //1. tipul parametrului pe care il returneaza serverul, 2. tipul parametrului pe care il trimiti
    getTasks: builder.query<Task[], void>({
      query: () => "/tasks",
      providesTags: ["Task"],
    }),

    addTask: builder.query<Task[], Task>({
      query: (body) => ({
        url: "/tasks",
        method: "POST",
        body: body,
      }),
      // invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation<Task[], number>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
    updateTask: builder.mutation<Task[], Task>({
      query: ({ id, ...body }) => ({
        url: `/tasks/${id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Task"],
    }),
  }),
})

export const {
  useGetTasksQuery,
  useLazyAddTaskQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = taskApi
