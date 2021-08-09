import React, { useState, useEffect } from 'react';
import './App.css';
import axios from './axios';
import AddTask from './components/Task/AddTask';
import EditTask from './components/Task/EditTasks';
import TaskList from './components/Task/TaskList';
import Header from './components/Header';
function App() {
  const [tasks, setTasks] = useState([]);

  //state for edititng mode
  const [editing, setEditing] = useState(false);
  const initialFormState = {
    id: null,
    title: '',
    timeStart: '',
    timeEnd: '',
  };
  const [curentTask, setCurentTask] = useState(initialFormState);

  const editTask = (task) => {
    setEditing(true);

    setCurentTask({
      id: task.id,
      title: task.title,
      timeStart: task.timeStart,
      timeEnd: task.timeEnd,
    });
  };

  const updateTask = async (id, task) => {
    setEditing(false);
    const res = await axios.put(`/tasks/${task.id}`, task);

    // console.log(res.data);
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...res.data } : task;
      })
    );
    // console.log(res.data);
  };
  //add task
  const addTask = async (task) => {
    // console.log(task);
    const req = {
      id: tasks.length + 1,
      ...task,
    };
    // console.log(req);
    const res = await axios.post('/tasks', req);
    setTasks([...tasks, res.data]);
  };
  //delete task
  const deleteTask = async (id) => {
    await axios.delete(`/tasks/${id}`);
    const newTasksList = tasks.filter((task) => task.id !== id);
    setTasks(newTasksList);
  };
  //update task

  const getTasks = async () => {
    const res = await axios.get('/tasks').catch((err) => console.log(err));
    if (res && res.data) {
      setTasks(res.data);
    }
  };
  // console.log(tasks.length);

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className='container'>
      <Header />
      <div className='flex-row'>
        <div className='flex-add'>
          {editing ? (
            <React.Fragment>
              <h2>Editing Task</h2>
              <EditTask
                editing={editing}
                setEditing={setEditing}
                curentTask={curentTask}
                updateTask={updateTask}
              />
            </React.Fragment>
          ) : (
            <div>
              <h2>Add Tasks for today</h2>
              <AddTask addTask={addTask} />
            </div>
          )}
        </div>
        <div className='flex-tasks'>
          {tasks.length === 0 && <h2>No tasks found for today</h2>}
          {tasks.length !== 0 && (
            <>
              <h2>Tasks for Today</h2>
              <TaskList
                tasks={tasks}
                editTask={editTask}
                deleteTask={deleteTask}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
