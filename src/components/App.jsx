import React from "react";

function getCurrTime() {
  let time = new Date().toLocaleTimeString();
  return time;
}

function App() {
  const [currtime, setTime] = React.useState(getCurrTime);

  function setCurrTime() {
    setTime(getCurrTime);
    //console.log("buttonClicked");
  }

  setInterval(setCurrTime, 1000);

  return (
    <div className="container">
      <h2>{currtime}</h2>
      <button onClick={setCurrTime}>Get Time</button>
    </div>
  );
}

export default App;
