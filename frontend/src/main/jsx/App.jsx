import '../css/App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/roboto'

import Routes from './Routes'

import Logo from '../../components/templates/jsx/Logo'
import Nav from '../../components/templates/jsx/Nav'
// import Main from '../../components/templates/jsx/Main'
import Footer from '../../components/templates/jsx/Footer'

export const App = props =>
    <BrowserRouter>
        <div className="app">        
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>

export default App