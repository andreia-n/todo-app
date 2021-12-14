import React, { FC } from "react"
import { NavLink } from "react-router-dom"
import "./navigation.css"
const Navigation: FC = () => {
  return (
    <header className='navigation'>
      <nav>
        <ul>
          <li>
            <NavLink to='/login' activeClassName='active'>
              Login{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to='/app' activeClassName='active'>
              App
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName='active'>
              Contact Us{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName='active'>
              About Us
            </NavLink>
          </li>

          {/* <li>
            <NavLink to='/' activeClassName='active'>
              Log Out
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
