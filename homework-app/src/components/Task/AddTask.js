import React, { useState } from 'react';
import '../Task/AddTasks.css';
const AddTask = (props) => {
  const [enteredTask, setEnteredTask] = useState('');
  const [enteredTimeStart, setenteredTimeStart] = useState('');
  const [enteredTimeEnd, setenteredTimeEnd] = useState('');

  // const [isValid, setIsValid] = useState(true);

  const handlerTask = (e) => {
    setEnteredTask(e.target.value);
  };

  const handlerTimeStart = (e) => {
    setenteredTimeStart(e.target.value);
  };
  const handlerTimeEnd = (e) => {
    setenteredTimeEnd(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();

    if (
      enteredTask.trim().length === 0 ||
      enteredTimeStart.trim().length === 0 ||
      enteredTimeEnd.trim().length === 0
    ) {
      alert('All fields are mandatory');
      return;
    }

    const taskData = {
      title: enteredTask,
      timeStart: enteredTimeStart,
      timeEnd: enteredTimeEnd,
    };
    props.addTask(taskData);

    setEnteredTask('');
    setenteredTimeStart('');
    setenteredTimeEnd('');
  };
  // const inputClasses = isValid
  //   ? 'new-task_control'
  //   : 'new-task_control invalid';
  return (
    <div className='add-form'>
      <form onSubmit={handlerSubmit}>
        <div className='new-task_controls'>
          <div className='new-task_control'>
            <label>Task </label>
            <input
              type='text'
              name='task'
              placeholder='Add your task'
              value={enteredTask}
              onChange={handlerTask}
              autocomplete='off'
            />
            {/* {!isValid && <p className='error-text'>Field must not be empty</p>} */}
          </div>
          <div className='new-task_control'>
            <label>Time Start</label>
            <input
              type='text'
              name='timeStart'
              placeholder='When do you want to start'
              value={enteredTimeStart}
              onChange={handlerTimeStart}
              autocomplete='off'
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
              autocomplete='off'
            />
          </div>
        </div>
        <div className='new-task_actions'>
          <button type='submit'>Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
