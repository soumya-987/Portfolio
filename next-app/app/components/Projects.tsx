import { link } from "fs";
import { title } from "process";

const projects=[
    {
        title:'Portfolio Website',
        description: 'Personal Portfolop built with Next.js and responsive design.',
        tech: ['Next.js','React','CSS'],
        link:'#',
        code:'#',

    },
    {
        title:'Dress-Up Game',
        description: 'An interactive React game that lets users style a character by mixing and matching outfits in real time.',
        tech:['React','JavaScript','CSS','Vite'],
        link:'#',
        code:'#',
    },
    {
        title:'DT Club Website',
        description:'A collaboraive website built with my club members to practice teamworkk, layout planning and component reuse',
        tech:['React','Next.js'],
        code:'#',


    },
    {
        title:'Sephora India Clone',
        description:'A full-featured e-commerce application inspired by Sephora India, built with real authentication, global state management, and scalable UI architecture.',
        tech:['React','Vite','Redux Toolkit','Firebase Auth','Tailwind CSS'],
        code:'#',

    }


];
export default function Projects(){
    return(
        <section className="projects">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-grid">{projects.map((project,index)=>(
                <div className="project-card" key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="project-tech">{project.tech.map((item)=>(
                        <li key={item}>{item}</li>

                    ))}</ul>
                </div>
            ))}</div>
        </section>
    )
}

