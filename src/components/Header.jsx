import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="navbar drawer h-24 bg-base-100">
      <div className="navbar-start">
        <Link to='/' className="pl-5 normal-case text-xl text-secondary font-normal">HAPPY MINDS</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Challenge</a></li>
          <li><a>Blogs</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn border-0 hidden lg:inline bg-base-100 hover:text-secondary hover:bg-base-100 mr-5 text-primary">Sign in</button>
        <button className="btn btn-secondary hidden lg:inline text-base-100">Create your free account</button>
      </div>
     
    </div>
  )
}

export default Header
