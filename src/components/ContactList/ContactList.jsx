import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from "redux/selectors";
import { deleteContact } from "redux/operations";
import { Button, List, ListItems } from './ContactList.styled';

export const ContactList = () => {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectVisibleContacts);

    return (<ListItems>{
        filteredContacts.map(contact => <List key={contact.id}>
            {contact.name}: {contact.number}
            <Button type="button" onClick={() => dispatch(deleteContact(contact.id))}>Delete</Button>
    </List>)
    }
</ListItems>)
}