
const handler = async (req, res) => {
    const { method } = req;
    const { allEvents } = await import('../../../data/data.json');

    if (method === 'POST') {
        const { email, eventId } = req.body
        allEvents.map(item => {
            if (item.id === eventId && !item.emails_registered.includes(email)) {
                item.emails_registered.push(email)
                res.status(200).json({ message: `Registered ${email} ${eventId}` });
            } else {
                res.status(200).json({ message: `Already Registered ${email} ${eventId}` });
                console.log({ message: `Already Registered ${email} ${eventId}` });
            }

        })

        // console.log("///////////////////", allEvents);

    }

}

export default handler;