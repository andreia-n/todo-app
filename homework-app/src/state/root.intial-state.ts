import { RootStateInterface } from "./root.interface"
import { tasksEntityInitialState } from "./task/taskInitial.state"

export const rootInitialState: RootStateInterface = {
  taskEntity: tasksEntityInitialState,
}
