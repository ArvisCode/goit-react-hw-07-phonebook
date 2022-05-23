import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactApi';
import { Item } from './ContactList.styled';

export const ContactList = () => {
  const { data = [] } = useGetContactsQuery();
  console.log(data);
  const { filter } = useSelector(state => getFilter(state));

  const [deleteContact] = useDeleteContactMutation();
  const onDeleteContact = id => deleteContact(id);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filtredContacts = filteredContacts();

  return (
    <ul>
      {data &&
        filtredContacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Contact
                name={name}
                number={number}
                onDeleteContact={onDeleteContact}
                id={id}
              />
            </Item>
          );
        })}
    </ul>
  );
};
