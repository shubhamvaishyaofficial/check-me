import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Service from './Components/Service';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Content from './Components/Content';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/content' element={<Content/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
