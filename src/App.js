import { Route, Routes,BrowserRouter as Router} from 'react-router-dom';
import {React} from 'react';
import './App.css';
import AllSec from './components/AllSec/AllSec';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Pricing from './components/Pricing/Pricing';
import Contactus from './components/ContactUs/Contactus';
import ServoBlog from './components/Servoblog/ServoBlog';
import Blogpage from './components/Blogpage/Blogpage';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="App">

<Router>
<ScrollToTop />

      <Navbar />
      
      <Routes>
        
        <Route path='/' element={<AllSec />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/services' element={<ServoBlog />} />
        <Route path='/services/:name' element={<Blogpage />} />
      </Routes>
     
      <Footer />

      </Router>
      
    </div>
  );
}

export default App;
