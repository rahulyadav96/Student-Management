
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import {Home} from "./components/Home"
import { NavBar } from './components/NavBar';
import { Sighin } from './components/signup/Signin';
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
      <NavBar />
       <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sighnIn">
          <Sighin />
        </Route>
       </Switch>
    
    </div>
  );
}

export default App;
