import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import { Routes, Route, Link } from "react-router-dom";
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Home/Navbar';
import Topbar from '../src/components/Home/Topbar';

function App() {
  return (
    <div className='App'>
      <Topbar />
      <Navbar />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} />

          </Routes>


      <Footer />
    </div>
  );
}

export default App;
