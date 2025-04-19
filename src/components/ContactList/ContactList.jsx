import styles from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';

export default function ContactList({ contacts }) {
  return (
    <div className={styles.container}>
      <ul>
        {contacts.map(contact => {
          <li>
            <Contact people={contact} />
          </li>
        })}
      </ul>
    </div>
  );
}
