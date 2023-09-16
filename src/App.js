import React from "react"
import data from "./data"
import Container from "./Container"
import './App.css';

function App() {

  const resArray=data.map(item => {
    return <Container item={item}/>
  })

  return (
    <div id="portfolio">
      <h3 className="headline">Click On Every Project To Experience It</h3>
      <div className="work-list">
        {resArray}
      </div>
    </div>
  );
}

export default App;
