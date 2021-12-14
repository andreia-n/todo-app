import { configureStore } from "@reduxjs/toolkit"
import { rootInitialState } from "./root.intial-state"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import rootReducer from "./root.reducer"
import { taskApi } from "./task/tasks-api"

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware),
})

setupListeners(store.dispatch)
const defaultExportedValue = { store }

export type AppDispatch = typeof store.dispatch

export default defaultExportedValue
