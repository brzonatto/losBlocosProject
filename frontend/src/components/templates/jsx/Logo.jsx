import '../css/Logo.css'
import React from 'react'
import logo from '../../../assets/images/losblocos.png'

export const Logo = props =>
    <aside className="logo">
        <img src={logo} alt="Logo"/>
    </aside>

export default Logo