
import React from 'react';

export default function EventsPage({data}){
    // console.log(data);
    return (<h1>All my events here</h1>)
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
  