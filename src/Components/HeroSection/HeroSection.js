import React from 'react'
import Button from '../Ui/Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/1.mp4" autoPlay loop muted />
            <div className="hero-buttons">
                <input className="search-input" type="text" placeholder="جستجوی مکان و شهر و کشور و ..." autoComplete={false} />
                <button buttonStyle="btn--search" >
                    جستجو
                </button>
            </div>
        </div>
    )
}

export default HeroSection
