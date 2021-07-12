import React from "react";

const input = (props) => {
  const { list, setList } = props;
  let task = {
    name: "",
    complete: false,
  };
  const onChange = (e) => {
    task.name = e.target.value;
  };

  const onClick = (e) => {
    setList([...list, task]);
    e.target.value = "";
  };

  return (
    <div className="container">
      <input onChange={onChange} type="text" name="task" />
      <button onClick={onClick}>Add task</button>
    </div>
  );
};

export default input;
