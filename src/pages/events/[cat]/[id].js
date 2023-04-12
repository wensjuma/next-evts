import Link from 'next/link';
import Image from 'next/image';

const ViewEventsCatPage = ({ data }) => {
    return (
        <div>
            <h3>
                {data.title}
            </h3>
            <Image width={1000} height={500} alt={data.id} src={data.image} />
            <h2> {data.title}</h2>
            <p>
                {data.description}
            </p>
        </div>
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