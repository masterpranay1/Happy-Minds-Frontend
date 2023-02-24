import React from 'react'
import HeroIllustration from '../assets/hero-illustration.png'

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-row-reverse">
                <img className='hidden lg:block' src={HeroIllustration} />
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className="text-5xl font-bold text-center lg:text-left leading-snug">Cheer up your mind
in just <span className='text-secondary block lg:inline'>30 DAYS</span></h1>
                    <p className="py-6 px-8 text-xl lg:px-0 text-center lg:text-left">Join us at Happy Minds and be the part of 30 days of challenge to make yourself mentally fit and happy.</p>
                    <button className="btn btn-secondary text-base-100">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero