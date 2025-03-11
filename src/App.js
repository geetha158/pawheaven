import { Route, Routes,BrowserRouter as Router} from 'react-router-dom';
import {React} from 'react';
import './App.css';
import AllSec from './components/AllSec/AllSec';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Whyus from './components/Whyus/Whyus';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import Contactus from './components/ContactUs/Contactus';
import ServoBlog from './components/Servoblog/ServoBlog';
import Blogpage from './components/Blogpage/Blogpage';

function App() {
  return (
    <div className="App">

<Router>

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
