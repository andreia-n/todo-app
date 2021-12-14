import { Task } from "../common/interface/Task"

export interface TasksEntityInterface {
  tasks: Task[]
}

export interface RootStateInterface {
  taskEntity: TasksEntityInterface
}
