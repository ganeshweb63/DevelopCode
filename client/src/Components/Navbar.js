import React, { useState } from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Register from './Register';
import Login from './Login'
import './navbar.css'

const Navbar =()=>{
    const [active,setActive]=useState(false);

    const activeToggle=()=>{
        if(active == true){
            setActive(false);
        }
        else{
            setActive(true);
        }
    }


    
    return(
        <div>
            <BrowserRouter>

            <nav className='nav'>
                <ul className='menu'>
                    <li className='logo'><Link className='a' to="/home">Develop Code</Link></li>
                    {/* <li className='item'><a href="#">Home</a></li> */}
                    <li className={active ? "item active" : "item"}><Link className='a' to="/home">Home</Link></li>
                    <li className={active ? "item active" : "item"}><Link className='a' to="#">Contact</Link></li>
                    <li className={active ? "item active" : "item"}><Link className='a' to="#">About</Link></li>
                    <li className={active ? "item button active" : "item button"}><Link className='a' to="/login">Login</Link></li>
                    <li className={active ? "item button secondary active" : "item button secondary"}><Link className='a' to="/register">Sign  In</Link></li>
                    <li onClick={activeToggle} className='toggle'><span className='bars'></span></li>
                </ul>

            </nav>


            <Routes>
                <Route path="/register" exact element={<Register/>}></Route>
                <Route path="/login" exact element={<Login/>}></Route>
            </Routes>
             
            </BrowserRouter>
        </div>
    )
}

export default Navbar;