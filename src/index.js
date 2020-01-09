import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function myFunAction(event){
	event.target.style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`
	event.target.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={myFunAction} />
  </div>,
  document.getElementById('root')
);