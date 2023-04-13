

import Link from 'next/link'
import Image from 'next/image'

const AllEvents = ({ data }) => {

    return (<div className="all_events_body">
        {data.map((ev) => (
            <Link key={ev.id} className="item" href={`events/${ev.id}`} >
                <div className="image_events">
                    <Image className="imageSelf" width={400} height={300} alt={ev.id} src={ev.image} />
                    <h2 className="eventContent"> {ev.title}</h2>
                </div>

            </Link>
        ))}
    </div>)
}


export default AllEvents;