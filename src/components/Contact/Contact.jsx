import css from './Contact.module.css';
import { FaUserLarge } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

export default function Contact({ people }) {
  return (
    <>
      <div>
        <div className={css.contactDataWrapper}>
          <FaUserLarge />
          <p className={css.contactDataDescript}>{people.name}</p>
        </div>
        <div className={css.contactDataWrapper}>
          <FaPhone />
          <p className={css.contactDataDescript}>{people.number}</p>
        </div>
      </div>
      <button className={css.contactDeleteButton} type='button'>Delete</button>
    </>
  );
}
