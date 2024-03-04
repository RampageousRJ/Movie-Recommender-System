import React from 'react'
import './card.css'

function Card(props) {

    const { title, overview, rating, img } = props.item;
    console.log(img);

    return (
        <div className="card max-w-lg md:max-w-max bg-cover" style={{ backgroundImage: `url('${img}')` }}>
            <div className="card-content w-full">
                <section className='card-title w-full flex justify-between items-center'>
                    <h2 className=''>{title}</h2>
                    <h4>Rating: {rating}</h4>
                </section>
                <p className="card-body">
                    {overview}
                </p>
                <button id='know-more-btn'>
                    Know More
                </button>
            </div>
        </div>
    )
}

export default Card