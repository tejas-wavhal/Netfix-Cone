import React from 'react'
import './Header.scss'
import logo from './netflixLogo.png'
import { Link } from 'react-router-dom'
import { ImSearch } from 'react-icons/im'

const Header = () => {
    return (
        <div>
            <nav className="header">
                <img src={logo} alt="logo" />

                <div>
                    <Link to="/">HOME</Link>
                    <Link to="/">SERIES</Link>
                    <Link to="/">FILMS</Link>
                    <Link to="/">MY LIST</Link>
                </div>

                <ImSearch />
            </nav>
        </div>
    )
}

export default Header