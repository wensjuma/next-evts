import Image from 'next/image';
import Link from 'next/link';
import EventCategory from "../../../components/events/event-category";

const EventsCatPage = ({ data, pageTitle }) => {
    {/* <EventCategory data={data} pageTitle={pageTitle} /> */ }
    return (<EventCategory data={data} pageTitle={pageTitle} />
       
    )
}

export default EventsCatPage;

export async function getStaticPaths() {

    const { events_categories } = await import('../../../../data/data.json');
    const allPaths = events_categories.map((item) => {
        return {
            params: {
                cat: item.id.toString()
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false

    }
}

export async function getStaticProps(context) {
    const { allEvents } = await import('../../../../data/data.json');

    let id = context?.params.cat
    const data = allEvents.filter(it => it.city === id);

    return {
        props: { data, pageTitle: id }
    }
}