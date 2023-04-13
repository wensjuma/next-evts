
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useRef } from 'react'

const SingleEvent = ({ data }) => {
    
    const emailInput = useRef();
    const router = useRouter();
    const onSubmit = async (e) => {
        let items =JSON.stringify(data)
        alert(items)
        e.preventDefault();
        const emailValue = emailInput.current.value;
        const idValue = router?.query.id;
        try {
            const response = await fetch('/api/emailReg',
                {
                    method: 'POST',
                    headers: {
                        "Content-type": 'application/json'
                    },
                    body: JSON.stringify({ email: emailValue, eventId: idValue })
                })
            if (!response.ok) {
                throw new Error(`Error${response.status}`)
            } else {
                const data = await response.json()
                console.log('POST', data);
            }

        } catch (error) {
            console.log('(ERROR:>)', error);
        }
    }
    return (<div>
        <h3>
            {data.title}
        </h3>
        <Image width={900} height={400} alt={data.id} src={data.image} />
        <h2> {data.title}</h2>
        <p>
            {data.description}
        </p>
        {JSON.stringify(data?.emails_registered)}
        <br />
        <form onSubmit={onSubmit} className='register_form'>

            <input ref={emailInput} className='email' type='email' id='email' placeholder='Please Enter your Email ...' /> <button className='btn' type='submit'>Submit</button>
        </form>
    </div>)
}
export default SingleEvent;