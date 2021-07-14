import React from 'react';
import './Task.css';

const Task = (props) => {
  const { id, title, timeStart, timeEnd } = props.task;
  return (
    <div className='task-wrapper'>
      <div className='task-container'>
        <div className='task-name'>{title}</div>
        <div className='time-start'>
          {timeStart <= 12 ? `${timeStart} am` : `${timeStart} pm`}
        </div>
        <div className='time-end'>
          {timeEnd > 12 ? `${timeEnd} pm` : `${timeEnd} am`}
        </div>
      </div>

      <span className='task-remove'>
        <i className='fas fa-times' onClick={() => props.deleteTask(id)}></i>
      </span>

      <span className='task-edit'>
        <i
          className='far fa-edit'
          onClick={() => props.editTask(props.task)}
        ></i>
      </span>
    </div>
  );
  // });
  // return <div>{renderTasks}</div>;
};

export default Task;
