import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../../Pages/About/About';
import Error from '../../Pages/Error/Error';
import Home from '../../Pages/Home/Home';
import Layout from "../Layout/Layout"
import House from '../../Pages/House/House';


function Rooter(){
    const id = window.location.pathname.split("/").pop()

    return (
        <Router>
            <Routes>
                <Route path='/Kasa' element={<Layout children={<Home/>}/> } />
                <Route path='/about' element={<Layout children={<About/>}/> } />
                <Route path={`/Kasa/house/${id}`} element={<Layout children={<House id={id}/>}/> } />
                <Route path='*' element={<Error/>} />
            </Routes>
        </Router>
    )
}

export default Rooter
