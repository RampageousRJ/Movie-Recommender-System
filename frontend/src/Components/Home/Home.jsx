import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './home.css'
import svg from '../../../src/assets/undraw_search_app_oso2.svg'
import { useNavigate } from 'react-router-dom'


function Home() {

    const finalTitle = 'Miner'
    const [visibleTitle, setVisibleTitle] = useState('')

    useEffect(() => {
        let currIndex = 0;
        let expanding = true;
        const expandContract = setInterval(() => {
            if (expanding) {
                console.log("Hello",currIndex);
                currIndex++
                setVisibleTitle(finalTitle.slice(0, currIndex))
                if (currIndex === finalTitle.length)
                    expanding = false;
            }
            else {
                currIndex--;
                setVisibleTitle(finalTitle.slice(0, currIndex - 1))
                if (currIndex === 0)
                    {
                        expanding=true;
                        setVisibleTitle('M')
                    }
            }
        }, 300)
        return () => clearInterval(expandContract);
    },[])

    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        navigate("/movies")
    }

    return (
        < div className='flex gap-10 flex-col-reverse lg:flex-row lg:justify-around min-h-screen 
        justify-center items-center text-center'>
            <section id='home-main' className='flex flex-col gap-4 justify-center max-w-screen-md px-3 '>
                <article id='home-content' className='flex flex-col gap-8'>
                    <h1 className='text-7xl text-center tracking-wider ' id='main-title'><span className='text-special'>Movie</span>{visibleTitle}</h1>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <p>MovieMiner delves into the world of cinema to suggest movies similar to the one you have in mind. Enter a title, and we'll curate a personalized list of recommendations based on genre, themes, actors, directors, and more.</p>
                    </motion.div>
                </article>
                <div className='btn-container'>
                    <button
                        id='home-btn'
                        onClick={handleClick}>
                        Get Started
                    </button>
                </div>
            </section>
            <section className=' w-64 lg:w-96 h-auto' id='home-svg'>
                <img src={svg} alt="svg" />
            </section>
        </div>
    )
}

export default Home