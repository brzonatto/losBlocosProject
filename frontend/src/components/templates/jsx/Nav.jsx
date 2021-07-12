import '../css/Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = props =>
    <aside className="nav-area">
        <nav className="nav">
            <Link to="/">
                <span className="material-icons">home</span> Início
            </Link>
            <Link to="/publicidade">
                <span className="material-icons group">image</span> Publicidade
            </Link>
            <Link to="/patrocinadores">
                <span className="material-icons group">thumb_up</span> Patrocinadores
            </Link>
        </nav>
    </aside>


export default Nav