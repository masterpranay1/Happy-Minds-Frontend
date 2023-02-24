import React from 'react'
import { Link } from 'react-router-dom'

function header() {
  return (
    <div className="navbar bg-base-100">
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
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Challange</a></li>
        <li><a>Blog</a> </li>
        <li><a>About</a></li>
        <li> <button className="btn border-0 hidden lg:inline bg-base-100 hover:text-secondary hover:bg-base-100 mr-5 text-primary">Sign in</button></li>
  <li><button className="btn btn-secondary hidden lg:inline text-base-100">Create your free account</button></li>
      </ul>
    </div>
</div>
  )
}

export default header
