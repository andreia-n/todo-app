import React, { useState, useEffect } from 'react';
import '../Task/AddTasks.css';
const EditTask = (props) => {
  console.log(props.curentTask);
  // const [task, setTask] = useState(props.curentTask);
  const { id, title, timeStart, timeEnd } = props.curentTask;
  const [enteredTask, setEnteredTask] = useState(title);
  const [enteredTimeStart, setenteredTimeStart] = useState(timeStart);
  const [enteredTimeEnd, setenteredTimeEnd] = useState(timeEnd);

  const handlerTask = (e) => {
    setEnteredTask(e.target.value);
  };

  const handlerTimeStart = (e) => {
    setenteredTimeStart(e.target.value);
  };
  const handlerTimeEnd = (e) => {
    setenteredTimeEnd(e.target.value);
  };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;

  //   setTask({ ...task, [name]: value });
  // };

  const handlerUpdate = (e) => {
    e.preventDefault();

    const updatetaskData = {
      //   id: tasks.length + 1,
      id: id,
      title: enteredTask,
      timeStart: enteredTimeStart,
      timeEnd: enteredTimeEnd,
    };
    props.updateTask(id, updatetaskData);
  };

  // useEffect(() => {
  //   setTask(props.curentTask);
  // }, [props]);
  useEffect(() => {
    setEnteredTask(title);
    setenteredTimeStart(timeStart);
    setenteredTimeEnd(timeEnd);
  }, [id, title, timeStart, timeEnd]);
  return (
    <div className='add-form'>
      <form onSubmit={handlerUpdate}>
        <div className='new-task_controls'>
          <div className='new-task_control'>
            <label>Task </label>
            <input
              type='text'
              name='task'
              placeholder='Add your task'
              value={enteredTask}
              onChange={handlerTask}
            />
          </div>
          <div className='new-task_control'>
            <label>Time Start</label>
            <input
              type='text'
              name='timeStart'
              placeholder='When do you want to start'
              value={enteredTimeStart}
              onChange={handlerTimeStart}
            />
          </div>
          <div className='new-task_control'>
            <label>Time End</label>
            <input
              type='text'
              name='timeEnd'
              placeholder='When do you want to finish'
              value={enteredTimeEnd}
              onChange={handlerTimeEnd}
            />
          </div>
        </div>
        <div className='edit-task_actions'>
          <button style={{ marginRight: '.6rem' }}>Update Task</button>
          <button onClick={() => props.setEditing(false)}>Cancel Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
