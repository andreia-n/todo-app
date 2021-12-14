import { shallowEqual } from "react-redux"
import { Task } from "../../common/interface/Task"

import { useAppSelector } from "../../hooks/redux.hook"

export const useTaskList = (): Task[] =>
  useAppSelector((state) => state.taskSlice.tasks, shallowEqual)
