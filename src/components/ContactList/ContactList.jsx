import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';

export default function ContactList({ contacts }) {
  return (
    <div className={css.container}>
      <ul className={css.contactList}>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={css.listItem}>
              <Contact people={contact} />
            </li>
          )
        })}
      </ul>
    </div>
  );
}
