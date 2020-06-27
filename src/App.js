import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './parent';
import ValueContext from './ValueContext';
import numberReducer from './numberReducer'


function App() {
  // let [number, setNumber] = useState(45);
  let value = useState(81);
  return (
    <ValueContext.Provider value={value}>
    <div>
      Hello World
      {/* <Parent num={number}></Parent> */}
      <Parent></Parent>

      {/* <button onClick={()=>{ setNumber(++number)}}>Update Number</button> */}
    </div>
    </ValueContext.Provider>
  );
}

export default App;
