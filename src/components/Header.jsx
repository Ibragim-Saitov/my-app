import React, { useState } from 'react'

const Header = () => {
    const [active, setActive] = useState("nav_menu")
    const [icon, setIcon] = useState("nav_toggler")
    
   const navToggler = () => {
    if (active === "nav_menu"){
        setActive("nav_menu nav_active")
    } else setActive("nav_menu")

    if (icon === "nav_toggler"){
       setIcon("nav_toggler")
    } else setIcon("nav_toggler")
   }
  return (
    <>
    <header>
        <div className="headerContainer flexSB">
            <div className="logo">
                <img src='https://beyond4cs.com/wp-content/uploads/2020/11/shane-co-logo-friend-in-the-business.jpg'></img>
            </div>
            <nav>
                <ul className={active}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Portfolio</a></li>
                    <li><a href="/">News</a></li>
                    <li><a href="/">Contact</a></li>
                    <button className="outline-btn">BUY NOW</button>
                </ul>
            </nav>
            <div onClick = {navToggler} className={icon}>
                <i className='fas fa-bars'></i>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header
