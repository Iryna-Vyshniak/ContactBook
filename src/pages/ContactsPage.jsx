import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { Title } from 'components/Title/Title';

const Contacts = () => {
  return (
    <Section title="PhoneBook">
      <ContactForm />
      <Title title="Contacts" />
      <Filter />
      <ContactList />
    </Section>
  );
};

export default Contacts;
