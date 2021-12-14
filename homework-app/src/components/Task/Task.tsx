import { Task as TaskType } from "../../common/interface/Task"
import { useDeleteTaskMutation } from "../../state/task/tasks-api"
import "./Task.css"

interface TaskProps {
  task: TaskType
  editTask: (task: TaskType) => void
}
const Task = ({ task, editTask }: TaskProps) => {
  const [deleteTask] = useDeleteTaskMutation()
  return (
    <div className='task-wrapper'>
      <div className='task-container'>
        <div className='task-name'>{task.title}</div>
        <div className='time-start'>{task.timeStart}</div>
        <div className='time-end'>{task.timeEnd}</div>
      </div>

      <span className='task-remove'>
        <i className='fas fa-times' onClick={() => deleteTask(task.id!)}></i>
      </span>

      <span className='task-edit'>
        <i className='far fa-edit' onClick={() => editTask(task)}></i>
      </span>
    </div>
  )
  // });
  // return <div>{renderTasks}</div>;
}

export default Task
