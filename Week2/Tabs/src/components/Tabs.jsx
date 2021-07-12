import React, {useState} from "react";
import Display from "./Display";


const Tabs = (props) => {
  const [tabs, setTabs] = useState([
    {
      label: "tab 1",
      content: "this is the content for tab 1:"
    },
    {
      label: "tab 2",
      content: "this is the content for tab 2:"
    },
    {
      label: "tab 3",
      content: "this is the content for tab 3:"
    },
  ])

  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabClickHandler = (e, idx) => {
    console.log('Clicked', idx);
    setSelectedIndex(idx);
  }

  return <div>
    {/* {JSON.stringify(tabs)} */}
    {
    tabs.map((tab, i) =>{
      return <button key={i} onClick={ (e) => {
        tabClickHandler(e, i)
      }}>{tab.content}</button>
    })
    }
    <hr />
    <Display theTab={tabs[selectedIndex]['content']} />
  </div>
};

export default Tabs;
