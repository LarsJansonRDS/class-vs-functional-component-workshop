import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Hoc from '../1-Basics/3_hoc_class';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Hoc} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
