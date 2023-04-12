import Image from 'next/image';
import Link from 'next/link';
const EventsCatPage = ({ data, pageTitle }) => {
    return (
        <>
            <h3>
                Events in {pageTitle}

            </h3>
            {data.map(evt => (
                <>
                    <Link key={evt.id} href={`${evt.city}/${evt.id}`}>
                        <Image width={200} height={200} alt={evt.id} src={evt.image} />
                        <h2> {evt.title}</h2>
                        <p>
                            {evt.description}
                        </p>
                    </Link>

                </>
            ))}
        </>
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