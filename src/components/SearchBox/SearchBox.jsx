import css from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.container}>
      <label className={css.labelFindContact}>Find contacts by name
        <input className={css.contactFindInput} type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
}
