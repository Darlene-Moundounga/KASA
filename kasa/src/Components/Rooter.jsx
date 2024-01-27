

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../Pages/About';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Header from './Header';
import Footer from './Footer';
import House from '../Pages/House';


function Rooter(){
    const id = window.location.pathname.split("/").pop()

    return (
        <Router>
             <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/> } />
                <Route path={`/house/${id}`} element={<House id={id}/>} />
                <Route path='/error' element={<Error/>}/>
                <Route path='*' element={<Error/>} />
                
                
            </Routes>
            <Footer/>
        </Router>
    )
}

export default Rooter