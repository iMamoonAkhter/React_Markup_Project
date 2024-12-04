import React from 'react'
import reactlogo from "../../assets/react.svg"

const Header = ()=> {
    return (
        <>
            <header className='header'>
                <img src={reactlogo} className='nav-logo' alt="React Logo" />
                <nav>
                    <ul className='nav-list'>
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}


export default Header