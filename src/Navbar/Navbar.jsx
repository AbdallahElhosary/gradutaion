import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Signup from '../Signup/Signup';
import Login from "../Login/Login"
import Categories from "../Categorie/Categories"
import Details from '../Details/Details';

function Navbar() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/details" element={<Details />} />
                </Routes>
            </div>
        </Router>
    )
}

export default Navbar