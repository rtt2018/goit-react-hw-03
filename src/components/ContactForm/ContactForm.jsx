import css from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <div className={css.container}>
      <form className={css.formContainer} action="">
        <label className={css.labelContact} htmlFor="contacNinjatName">Name
          <input className={css.contactInput} type="text" name='contacNinjatName' />
        </label>
        <label className={css.labelContact} htmlFor="phoneNinjaNumber">Number
          <input className={css.contactInput} type="text" name="phoneNinjaNumber" id="" />
        </label>
        <button className={css.buttonAddContact} type='submit' >Add contact</button>
      </form>
    </div>
  );
}
