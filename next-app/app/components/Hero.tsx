'use client';
import {motion} from 'framer-motion';
import Image from 'next/image';
export default function Hero(){
    return(
        <motion.section
        className='hero' initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.6,ease:'easeOut'}}>
                   <section className="hero">
            <div className='hero-text'>
                <h1 className="hero-title">
                Hi, I'm <span>Soumya Jain</span>
                </h1>
                <p className="hero-subtitle">
                    Frontend Developer building responsive web experiences with Next.js
                </p>
                <div className="hero-actions">
                    <a href="/projects" className="btn primary">View Projects</a>
                    <a href="/conatact" className="btn secondary">Contact Me</a>
                </div>

            </div>
            <div className='hero-image'>
                <Image src="/mee.jpg"
                alt="Soumya Jain profile photo"
                width={320}
                height={320}
                priority>
                    
                </Image>
            </div>
        </section>
            
        </motion.section>


    );
}