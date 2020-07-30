import React, { useState } from "react"

function UseStateHookExample() {
  const [count] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
    </div>
  )
}
export default UseStateHookExample
