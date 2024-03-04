import React from 'react'
import './cards.css'
import Card from '../Card/Card'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { motion } from 'framer-motion'

const objs = [
    {
        title: "Title 1",
        overview: "Overview 1 is of great importance as we dive deeper into it.",
        img: "https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg",
        rating: "5.0"
    },
    {
        title: "Title 2",
        overview: "Overview 2 is of great importance as we dive deeper into it.",
        img: "https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg",
        rating: "4.0"
    },
    {
        title: "Title 3",
        overview: "Overview 3 is of great importance as we dive deeper into it.",
        img: "https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg",
        rating: "5.0"
    },
    {
        title: "Title 4",
        overview: "Overview 4 is of great importance as we dive deeper into it.",
        img: "https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg",
        rating: "2.0"
    },
    {
        title: "Title 3",
        overview: "Overview 3 is of great importance as we dive deeper into it.",
        img: "https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg",
        rating: "5.0"
    },
    {
        title: "Title 4",
        overview: "Overview 4 is of great importance as we dive deeper into it.",
        img: "https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg",
        rating: "2.0"
    },
]

function Cards() {

    const navigate = useNavigate()
    const handleGoBack = (e) => {
        e.preventDefault()
        navigate("/")
    }

    const handleSearch = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div id='container' className='min-w-screen min-h-screen'>
                <section id='search-section' className='p-8 w-full flex justify-around'>
                    <div id='search-button' className='w-1/2 relative'>
                        <input
                            type="text"
                            id="search"
                            name='search'
                            placeholder='Search movies'
                            className='px-3 py-2 rounded-lg bg-transparent opacity-85       shadow-glow-1
                            w-full '
                        />
                        <FaSearch
                            className='absolute right-3 top-3 cursor-pointer text-gray-400'
                            onClick={handleSearch}
                        />

                    </div>
                    <button
                        id='go-back-btn'
                        onClick={handleGoBack}
                    >
                        Go Back
                    </button>
                </section>
                <main id='cards' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center p-6'>
                    {objs.map((item, ind) => (
                        <motion.div
                            initial={{ rotateY: -180, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            transition={{ delay: ind*0.5 + 1.0 }}
                        >
                            <Card key={ind}
                                item={item}
                            />
                        </motion.div>
                    )
                    )}
                </main>
            </div>
        </>
    )
}

export default Cards