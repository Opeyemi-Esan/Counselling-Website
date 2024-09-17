import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Counselor from './Components/Counselor';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Info from './Components/Info';

function App() {
  return (
    <div className="App">
        <Info />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/counselor' element={<Counselor/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
    </div>
  );
}

export default App;
