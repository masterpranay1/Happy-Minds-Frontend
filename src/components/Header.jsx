import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="h-24 bg-base-100">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="navbar">
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
        <div className="navbar-end flex gap-4">
          <button className="btn border-0 hidden lg:inline bg-base-100 hover:text-secondary hover:bg-base-100 mr-5 text-primary">Sign in</button>
          <button className="btn btn-secondary hidden lg:inline text-base-100">Create your free account</button>
        </div>
        <label htmlFor="my-drawer" className="lg:hidden ml-auto btn btn-ghost drawer-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu menu-vertical absolute h-[90vh] z-100 p-4 w-80 bg-base-100 text-base-content">
          <li><a>Challenge</a></li>
          <li><a>Blogs</a></li>
          <li><a>About</a></li>
          <li className='mt-auto'><button className="btn border-0 lg:inline bg-base-100 hover:text-secondary hover:bg-base-100 text-primary normal-case">Sign In</button></li>
          <li><button className="btn mx-6 btn-secondary lg:hidden text-base-100  normal-case">Create your free account</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
