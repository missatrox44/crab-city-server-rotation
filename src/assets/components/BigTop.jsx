import React from "react";
import CurrentCount from "./CurrentCount";
import ServerCount from "./ServerCount";

const Server = "Kyle";
const Count = 1; 
const Button = "Back in the game"

const BigTop = () => {
  return (
    <div>
      <h2>Next Server: {Server}</h2>
      <h2>Current Count: {Count}</h2>
      <Button type={Button} />;
    </div>
  )
}

export default BigTop
