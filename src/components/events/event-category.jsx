
import Link from 'next/link'
import Image from 'next/image'

const EventCategory = ({ data, pageTitle}) => {
         return (<div className='town_events'>
             <h3 className='pageTitle'>
                 Events in {pageTitle}
 
             </h3>
             <div className='content'>
                 {data.map((evt) => (
                     <Link key={evt.id} href={`/events/${evt.city}/${evt.id}`}>
                         <div className='card'>
                             <Image width={370} height={200} alt={evt.id} src={evt.image} />
                             <h3> {evt.title}</h3>
                             <p className='desc'>
                                 {evt.description}
                             </p>
                         </div>
                     </Link>
 
 
                 )
                 )}
             </div>
         </div> )

}

export default EventCategory;