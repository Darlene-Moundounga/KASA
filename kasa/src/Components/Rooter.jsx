

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../Pages/About';
import House from '../Pages/House';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Header from './Header';
import Footer from './Footer';


function Rooter(){
    return (
        <Router>
             <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/> } />
                <Route path='/house' element={<House/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
            <Footer/>
        </Router>
    )
}

export default Rooter