import Link from 'next/link';
import Image from 'next/image';
import SingleEvent from '@/components/events/singleEvent';

const ViewEventsCatPage = ({ data }) => {
    return (
        <SingleEvent data={data} />
    )
}

export default ViewEventsCatPage;

export async function getStaticPaths() {
    const { allEvents } = await import('../../../../data/data.json');
    console.log(allEvents);
    const allPaths = allEvents.map((path) => {
        return {
            params: {
                cat: path.city,
                id: path.id
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
    let id = context?.params.id
    const data = allEvents.find(it => it.id === id);
    return {
        props: { data }
    }
}