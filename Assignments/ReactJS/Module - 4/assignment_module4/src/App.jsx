import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LifeCycleFunctional from './Components/LifeCycleFunctional'
import LifeCycleClass from './Components/LifeCycleClass'
import Header from './Components/Header'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/functional' element={<LifeCycleFunctional />}></Route>
          <Route path='/class' element={<LifeCycleClass />} initialName="InitialNameFromProps" ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
