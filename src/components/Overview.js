import React from 'react';

const Overview = (props) => {
  const { tasks } = props;
  return (
    <ul>
      {tasks.map(task => {
        return <li key={task.id} className="task">{task.text}</li>
      })}
    </ul >
  );
}

export default Overview;