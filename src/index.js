import React from 'react';
import Render from 'react-dom';

const Hi = () => {
  return (
    <p>Hello there!</p>
  )
}

render(<Hi/>, document.getElementById("app"));
