import React from 'react';
import Task from './Task';
const TaskList = (props) => {
  const renderTasks = props.tasks.map((task) => {
    return (
      <Task
        key={task.id}
        task={task}
        deleteTask={props.deleteTask}
        editTask={props.editTask}
      />
    );
  });
  return <div>{renderTasks}</div>;
};

export default TaskList;
