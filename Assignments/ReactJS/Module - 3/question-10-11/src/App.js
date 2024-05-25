import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Assignment_Menu from './Components/Assignment_Menu';
import ListView from './Components/ListView';
import Inc_Dec from './Components/Inc_Dec';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const arr = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"];

  return (
    <div className="App">
      <BrowserRouter>
        <Assignment_Menu />
        <Routes>
          <Route path='/listview' element={<ListView myArray={arr} />}></Route>
          <Route path='/incdec' element={<Inc_Dec />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
