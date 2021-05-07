import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

class MyForm extends React.Component {
  render() {
    return (

      <div >
      
      <h1>Log in</h1>
      
      <form>
      <div id = "inp_text" >
        <p><input
          type="text" placeholder = "Enter your name" 
        /></p>

        <p><input
          type="text" placeholder = "Password"
        /></p>

        <button type="submit">Login</button>
      </div>
      </form>

      </div>
    );
  }
}
  
  ReactDOM.render(<MyForm />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
