import React, {lazy,Suspense} from 'react';
import './App.css';
import Header from './Components/Header/Header.js'
import Loader from './Components/Main/Loader/Loader.js';
//import Main from './Components/Main/Main.js';
const Main = lazy(()=>import("./Components/Main/Main.js"))

function App() {
  return (
    <div className="App" style={{backgroundColor:"#ffffff"}}>
      <Header/>
      <Suspense fallback={<Loader/>}>
      <Main/>
      </Suspense>
    </div>
  );
}

export default App;
