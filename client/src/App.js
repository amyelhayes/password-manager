import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {

  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');

  const addPassword = () => {
    Axios.post('http://localhost:3001/addpassword', {password: password, title: title});
  }

  return (
    <div className="App">
      <div className="AddPassword">
        <input type="text" placeholder=" Password" onChange={(event) => {setPassword(event.target.value)}}/>
        <input type="text" placeholder=" Youtube" onChange={(event) => {setTitle(event.target.value)}}/>
        <button onClick={}> Add Password</button>
      </div>
     
    </div>
  );
}

export default App;