import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Task } from "../../common/interface/Task"
import { TasksEntityInterface } from "../root.interface"
import { tasksEntityInitialState } from "./taskInitial.state"
import { taskApi } from "./tasks-api"

const taskSlice = createSlice({
  name: "task",
  initialState: tasksEntityInitialState,
  reducers: {
    setTasks(state: TasksEntityInterface, action: PayloadAction<Task[]>) {
      state.tasks = action.payload
    },
    resetTasksEnity(state: TasksEntityInterface) {
      state.tasks = tasksEntityInitialState.tasks
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      taskApi.endpoints.getTasks.matchFulfilled,
      //Payload action type = server returned type
      (state: TasksEntityInterface, action: PayloadAction<Task[]>) => {
        state.tasks = action.payload
      }
    )
    builder.addMatcher(
      taskApi.endpoints.addTask.matchFulfilled,
      (state: TasksEntityInterface, action: PayloadAction<Task>) => {
        state.tasks.push(action.payload)
        console.log(state.tasks)
      }
    )
    builder.addMatcher(
      taskApi.endpoints.deleteTask.matchFulfilled,
      (state, action: PayloadAction<number>) => {
        // const { id } = action.payload
        // const index = state.tasks.findIndex((task) => task.id === id)
        // const updatedTaskList = state.tasks.splice(index, 1)
        // state.tasks = updatedTaskList
        state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        console.log(state.tasks.filter((task) => task.id))
      }
    )
    builder.addMatcher(
      taskApi.endpoints.updateTask.matchFulfilled,
      (state, action: PayloadAction<Task>) => {
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        )
      }
    )
  },
})

export const { setTasks, resetTasksEnity } = taskSlice.actions
export default taskSlice.reducer
