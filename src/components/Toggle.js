import React, {useState} from "react";

function Toggle() {

  const [isOff, setIsOff] = useState(true)

  function handleClick(e){
    setIsOff((isOff) => !isOff)
  }

  return <button onClick={handleClick}>{isOff ? "OFF" : "ON"}</button>;
}

export default Toggle;