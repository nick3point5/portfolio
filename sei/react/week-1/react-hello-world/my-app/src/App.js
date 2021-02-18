// bring in React from React
import React from 'react'

// define our Hello functional component
function Hello(props) {
// what should the component return
  return (
  // Make sure to return some UI
    <h1>Hello {props.name}</h1>
  );
}

export default Hello;
