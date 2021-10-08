import React,{ useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
    const [show, handelShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handelShow(true)
            }else{
                handelShow(false)
            }
        })
        return ()=>{
            window.removeEventListener("scroll")
        }
        
    }, [])


    return (
        <div className={`nav${show && "nav_black"}`}>
            <img 
                className='nav_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/3/36/Netflix_logo_%282%29.svg'
                alt='Netflix' />

            <img 
                className='nav_avatar'
                src='https://occ-0-1946-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41'
                alt='avatar'/> 

            
        </div>
    )
}

export default Navbar
