import { Container } from './Container/Container';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useGetContactsQuery } from 'redux/contactApi';

export const App = () => {
  const { data } = useGetContactsQuery();
  return (
    <>
      <Container title="Phonebook">
        <ContactForm />
      </Container>

      <Container title="Contacts">
        <Filter />
        {data ? <ContactList /> : <p>Contact list is empty.</p>}
      </Container>
    </>
  );
};
