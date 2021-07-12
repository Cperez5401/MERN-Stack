import React, { useState } from "react";
import "./App.css";
import Input from "./components/input";
import Task from "./components/task";

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      {list.map((task, i) => (
        <Task task={task} setList={setList} index={i} list={list} />
      ))}
      <Input list={list} setList={setList} />
    </div>
  );
}

export default App;
