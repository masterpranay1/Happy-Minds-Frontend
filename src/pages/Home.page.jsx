import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <div className='drawer drawer-content flex flex-col min-h-screen overflow-x-hidden'>
            <Header />
            <Footer />
            <Outlet/>
        </div>
    )
}

export default Home