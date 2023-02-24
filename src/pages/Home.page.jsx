import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <div className='flex flex-col min-h-screen overflow-x-hidden'>
            <Header />
            <Hero />
            <Footer />
        </div>
    )
}

export default Home