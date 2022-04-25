import { useEffect, useState } from 'react';
import './App.css';
import Routes from './Routes';




function App() {
  const [auth, setAuth] = useState(false)

  
  return (
    <div className="App">
       <Routes auth={auth}/>   
    </div>
  );
}

export default App;
