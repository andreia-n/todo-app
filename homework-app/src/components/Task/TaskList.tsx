import { Task as TaskType } from "../../common/interface/Task"
import Task from "./Task"

interface Props {
  tasks: TaskType[]
  editTask: (task: TaskType) => void
}
const TaskList = ({ tasks, editTask }: Props) => {
  return (
    <div>
      {tasks?.map((task: TaskType) => (
        <Task key={task.id} task={task} editTask={editTask} />
      ))}
    </div>
  )
}

export default TaskList
