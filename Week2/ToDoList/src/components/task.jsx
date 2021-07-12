import React from "react";

const Task = (props) => {
  const { task, index, list, setList } = props;

  const onClick = () => {
    return setList(() => list.filter((task) => list.indexOf(task) !== index));
  };

  return (
    <div>
      <h3>{task.name}</h3>
      <div>
        <label htmlFor="checkbox">Completed?</label>
        <input type="checkbox" name="" />
        <button onClick={onClick}>X</button>
      </div>
    </div>
  );
};

export default Task;
