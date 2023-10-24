import { Formik, Field } from 'formik';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { FormFlex, Box, Button, FieldFlex } from './Form.styled';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const checkingContact = contact => {
        return contacts.find(elem => elem.name.toLowerCase() === contact.name.toLowerCase())
    }

    const addThisContact = contact => {
        if (checkingContact(contact)) {
            return toast.error('Contact already exists.')
        } else {
            dispatch(addContact(contact))
        }
    }

return <Formik
    initialValues={{
        name: '',
        number: ''
    }}
    onSubmit={addThisContact}>
    <FormFlex>
    <Box>
            Name
        <FieldFlex
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    >
            
        </FieldFlex>
        </Box>
    <Box>
            Number
            <FieldFlex
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    >
            
        </FieldFlex>
        </Box>
        <Button type='submit'>+ Add contact</Button>
</FormFlex>
</Formik>
}