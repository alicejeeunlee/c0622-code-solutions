import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return <button>Click Me!</button>;
}

const MyCustomButton = <CustomButton />;
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(MyCustomButton);
