import Form from './Form'
import React, {useState, useEffect} from "react";
import India from "./Components/India";
import Canada from "./Components/Canada";
import Registration from './Registration';
import Child from './Components/Child'

function App() {

  // function displayDet(abc){
  //   alert(abc.age);
  // }
  
  // const [numb, setNumb] = useState(0);
  // const [toggle, setToggle] = useState(true);

  // function increment() {
  //   setNumb( (previous) => previous + 1)
  // }

  // useEffect(() => { 
  //   setInterval( () => setNumb((previous) => previous + 1), 2000)
  //   ;
  // }, [])
  return (
    <div className="App">
      {/* <Form/>
      {numb}
      <button onClick={increment}>Increment</button>
      {(toggle===true)?<India/> :<Canada/>}
      <button onClick={() => {setToggle(!toggle)}}>Toggle</button> */}
    <Registration/>
    {/* <Child func = {displayDet} /> */}
    </div>
  );
}

export default App;
