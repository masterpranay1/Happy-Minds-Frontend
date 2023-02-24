import React from 'react'
import HeroIllustration from '../assets/hero-illustration.png'

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={HeroIllustration} />
                <div>
                    <h1 className="text-5xl font-bold">Cheer up your mind
in just <span className='text-secondary'>30 DAYS</span></h1>
                    <p className="py-6">Join us at Happy Minds and be the part of 30 days of challenge to make yourself mentally fit and happy.</p>
                    <button className="btn btn-secondary text-base-100">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero