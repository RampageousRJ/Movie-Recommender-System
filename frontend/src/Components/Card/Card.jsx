import React from 'react'
import './card.css'

function Card() {
    return (
        <div className="card">
            <div className="card-content">
                <h2 className="card-title">Something Awesome</h2>
                <p className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
                </p>
                <a href="#" className="button">
                    Learn More
                </a>
            </div>
        </div>
    )
}

export default Card