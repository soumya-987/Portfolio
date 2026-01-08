'use client';
import Link from 'next/link';
import { usePathname} from 'next/navigation';
import {useState} from 'react';
export default function Navbar(){
    const pathname=usePathname();
    const [open,setOpen]=useState(false);
    const linkClass=(path:string)=>
        pathname===path?'active': '';
    return(
        <header className='navbar'>
            <div className='nav-top'>
                <span className='logo'>Soumya</span>
                <button className='menu-btn' onClick={()=>{setOpen(!open);
                console.log('clicked');
                }} aria-label="Toggle menu">
                    ☰
                </button>
            </div>
            <nav className={`nav-links ${open?'open':' '}`}>
                <Link href="/" className={linkClass('/')} onClick={()=> setOpen(false)}>Home</Link>
                <Link href="/about" className={linkClass('/about')} onClick={()=> setOpen(false)}>About</Link>
                <Link href="/projects" className={linkClass('/projects')} onClick={() => setOpen(false)}>Projects</Link>
                <Link href="/contact" className={linkClass('/contact')} onClick={() => setOpen(false)}>Contact</Link>

            </nav>
        </header>
    );
}