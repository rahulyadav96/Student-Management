import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import {Home} from "./components/Home"
function App() {
  const [contest,setContest] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(()=>{

  },[])

  const fetchContest = ()=>{
    setLoading(true);
    try{
      axios.get("http://localhost:3210/contests")
      .then(res=>{
        setLoading(false);
        setContest(res)
      })
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Management system</h1>
        <button>SignUP/Login</button>
      </header>
      <Home />
    </div>
  );
}

export default App;
