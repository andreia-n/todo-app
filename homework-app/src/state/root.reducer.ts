import { combineReducers } from "@reduxjs/toolkit"
import taskSlice from "./task/task.reducer"
import { taskApi } from "./task/tasks-api"

const rootReducer = combineReducers({
  taskSlice,
  [taskApi.reducerPath]: taskApi.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
