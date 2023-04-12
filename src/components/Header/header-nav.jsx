
import Link from 'next/link'
import Image from 'next/image'
import React from 'react';
import styles from '@/styles/Home.module.css'

export default function HearderNav({ data }) {
    return (
        <header>
            <div className="topNav" >
                <Image alt="My Logo" src={'/images/logo.png'} width={60} height ={60}/>
                <nav className={styles.navheader}>
                 <ul>
                    <li>
                    <Link href='/'>
                        Home
                    </Link >
                   
                    </li>
                    <li>
                    <Link href={'/about-us'}>
                        About
                    </Link>
                  
                    </li>
                    <li>
                    <Link href={'/events'}>
                        Events
                    </Link>
                    </li>
                 </ul>
                </nav>

            </div>

        </header>
    )
}

