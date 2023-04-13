
import React from 'react';

import AllEvents from './../../components/events/all-events'

export default function EventsPage({ data }) {
  return <>
    <AllEvents data={data} />
  </>
}

export async function getStaticProps() {
  const { events_categories } = await import('../../../data/data.json');
  // console.log(events_categories);
  return {
    props: {
      data: events_categories
    }
  }

}
