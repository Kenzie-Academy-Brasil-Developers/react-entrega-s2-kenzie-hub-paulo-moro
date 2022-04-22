import { useEffect, useState } from 'react';
import './App.css';
import Routes from './Routes';

function App() {
  const [auth, setAuth] = useState()

  
  return (
    <div className="App">
       <Routes/>   
    </div>
  );
}

export default App;
