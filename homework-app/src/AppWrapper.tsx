import React, { useState, useEffect } from "react"
import "./App.css"
import axios from "./axios"
import AddTask from "./components/Task/AddTask"
import EditTask from "./components/Task/EditTasks"
import TaskList from "./components/Task/TaskList"
import Header from "./components/header/Header"
import { Task } from "./common/interface/Task"
import { useGetTasksQuery } from "./state/task/tasks-api"
import { useTaskList } from "./state/task/task.selector"
import { useAppDispatch } from "./hooks/redux.hook"
import { setTasks } from "./state/task/task.reducer"

const AppWrapper = () => {
  const tasks = useTaskList()
  const dispatch = useAppDispatch()
  //state for edititng mode
  const [editing, setEditing] = useState<boolean>(false)
  const initialFormState = {
    id: 1,
    title: "",
    timeStart: "",
    timeEnd: "",
  }
  const [curentTask, setCurentTask] = useState(initialFormState)

  const editTask = (task: Task) => {
    setEditing(true)

    setCurentTask({
      id: task.id!,
      title: task.title,
      timeStart: task.timeStart,
      timeEnd: task.timeEnd,
    })
  }

  // const updateTask = async (id: number, task: Task) => {
  //   setEditing(false)
  //   const res = await axios.put(`/tasks/${task.id}`, task)

  //   console.log(res.data)
  //   dispatch(
  //     setTasks(
  //       tasks?.map((task) => {
  //         return task.id === id ? { ...res.data } : task
  //       })
  //     )
  //   )
  //   // console.log(res.data);
  // }

  //delete task
  const deleteTask = async (id: number) => {
    await axios.delete(`/tasks/${id}`)
    const newTasksList = tasks!.filter((task) => task.id !== id)
    dispatch(setTasks(newTasksList))
  }
  //update task
  const { isLoading: isTasksLoading } = useGetTasksQuery()

  useEffect(() => {
    // dispatch(setTasks(tasks))
  }, [tasks])
  if (isTasksLoading) return <p>Loading Tasks.....</p>
  return (
    <div className='container'>
      <Header />

      <div className='flex-row'>
        <div className='flex-add'>
          {editing ? (
            <React.Fragment>
              <h2>Editing Task</h2>
              <EditTask
                setEditing={setEditing}
                curentTask={curentTask}
                // updateTask={updateTask}
              />
            </React.Fragment>
          ) : (
            <div>
              <h2>Add Tasks for today</h2>
              <AddTask />
            </div>
          )}
        </div>
        <div className='flex-tasks'>
          {tasks?.length === 0 && <h2>No tasks found for today</h2>}
          {tasks?.length !== 0 && (
            <>
              <h2>Tasks for Today</h2>
              <TaskList tasks={tasks!} editTask={editTask} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AppWrapper
