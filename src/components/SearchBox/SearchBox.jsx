import css from './SearchBox.module.css';

export default function SearchBox() {
  return (
    <div className={css.container}>
      <form action="">
        <label className={css.labelFindContact}>Find contacts by name
          <input className={css.contactFindInput} type="text" />
        </label>
      </form>
    </div>
  );
}
