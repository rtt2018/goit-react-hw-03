import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className={css.container}>
      {contacts.length === 0
        ? <p>Dear Mentor, no such contact found, try again! )))</p>
        : (<ul className={css.contactList}>
          {contacts.map(contact => {
            return (
              <li key={contact.id} className={css.listItem}>
                <Contact people={contact} onClickDelete={onDelete} />
              </li>
            )
          })}
        </ul>)
      }
    </div>
  );
}
