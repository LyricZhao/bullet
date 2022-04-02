import './App.css'

import BulletScreen  from 'rc-bullets';
import React, {useEffect, useState} from "react";
import ReactPlayer from "react-player";
import StyledBullet from "./bullet";


function App() {
  const [screen, setScreen] = useState(null)
  const [bullet, setBullet] = useState('')
  useEffect(() => {
    let s = new BulletScreen('.screen', {duration: 20})
    setScreen(s)
  }, [])

  const handleChange = ({ target: { value } }) => {
    setBullet(value);
  };

  const handleKeyDown = (event) => {
      if (event.key === "Enter" && bullet)
          screen.push(<StyledBullet msg={bullet} color="#fff" size="12px"/>)
  }

  return (
    <div className="App">
      <div className="screen">
          <ReactPlayer className="react-player" playing="true" controls="true" loop="true" url="demo.mp4"/>
      </div>
      <div className="control" style={{width: "100vw", textAlign: "center"}}>
        <input value={bullet} onChange={handleChange} style={{width: "100%"}} onKeyDown={handleKeyDown}/>
      </div>
    </div>
  );
}

export default App;
