import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { ContactForm } from "components/Form/Form";
import { fetchContacts } from 'redux/operations';


export default function Contacts() {
    const dispatch = useDispatch();

    useEffect(() => {
dispatch(fetchContacts)
    }, [dispatch])

    return (
        <div>
            <Helmet>
                <title>Contacts</title>
            </Helmet>
            <ContactForm />
            <Filter/>
            <ContactList />
        </div>
    )
}