import Image from "next/image";
import React from 'react';
const { default: Link } = require("next/link")
import styles from '@/styles/Home.module.css'

export default function MainComponent({ data }) {
    return (
        <>
            {data.map((ev) => {
                return <div key={ev.id} className="homeBody">
                    <Link className="item" href={`events/${ev.id}`} >
                     <div className="image">
                     <Image className="imageSelf" width={200} height={200} alt={ev.id} src={ev.image} />
                     </div>
                        <div className="content">
                            <h2> {ev.title}</h2>
                            <p>
                                {ev.description}
                            </p>
                        </div>
                    </Link>
                </div>

            })}
        </>
    )
}



