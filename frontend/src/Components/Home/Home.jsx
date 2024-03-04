import React from 'react'
import { motion } from 'framer-motion'
import './home.css'
import svg from '../../../src/assets/undraw_search_app_oso2.svg'
import { useNavigate } from 'react-router-dom'


function Home() {

    const navigate=useNavigate()

    const handleClick=(e)=>{
        e.preventDefault()
        navigate("/movies")
    }

    return (
        < div className='flex gap-10 flex-col-reverse lg:flex-row lg:justify-around min-h-screen 
        justify-center items-center text-center'>
            <section id='home-main' className='flex flex-col gap-4 justify-center max-w-screen-md px-3 '>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <article id='home-content' className='flex flex-col gap-8'>
                        <h1 className='text-5xl text-center'>TITLE OF PROJECT!</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem necessitatibus ducimus vero suscipit eius hic eum soluta in, dignissimos quibusdam laborum voluptatem totam iure veniam ad numquam inventore magnam provident vitae distinctio harum itaque architecto! Minima adipisci eum tenetur, itaque architecto quas incidunt ipsa ut!</p>
                    </article>
                </motion.div>
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