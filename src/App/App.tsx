import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import "../layout/layout.scss";

import Excercise from '../2-Exercise/Excercise';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Excercise} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
