import {BrowserRouter,Route,Routes} from "react-router-dom"

import React from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"


// pages-------------
import Home from "../Pages/Home"
import CreatePosts from "../Pages/CreatePosts"
import ErrorPage from "../Pages/ErrorPage"
import EditPost from "../Pages/EditPosts"
import About from "../Pages/About"
import Contactus from "../Pages/Contactus"


export default  function Router(){

 return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreatePosts/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="editpost/:id" element={<EditPost />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contactus/>}/>

    </Routes>
     <Footer/>
    </BrowserRouter>
 
    </>
  )
}
