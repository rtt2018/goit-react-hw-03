import { useState, useEffect } from 'react'
// import sql from 'sql'
import './App.css'
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';

function App() {

  // function convertResultToObject(resArray) {
  //   const columns = resArray[0].columns;
  //   const values = resArray[0].values;
  //   return values.map(row => {
  //     return columns.reduce((obj, column, i) => {
  //       obj[column] = row[i];
  //       return obj;
  //     }, (obj = {}));
  //   });
  // }
  const initPhoneBook = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [phoneBook, setPhoneBook] = useState((JSON.parse(window.localStorage.getItem("superNinjaContacts")) ?? initPhoneBook));
  const [searchPhrase, setSearchPhrase] = useState("")

  const handleChange = (evt) => {
    setSearchPhrase(evt.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem("superNinjaContacts", JSON.stringify(phoneBook));
  }, [phoneBook]);

  const filteredContacts = phoneBook.filter(abonent =>
    abonent.name.toLowerCase().includes(searchPhrase.toLowerCase())
  )

  return (
    <div>
      <h1>Phonebook</h1>
      <p>Виконати домашку за умовою у конспекті і не ускладнювати собі життя? Не чув такого.... Так не цікаво...</p>
      <p>Зробити щось, щоб помучитися, навчитися чогось, і щоб ментору запам'ятатися нінзя-кодом - оце воно! Ось він, смак життя! </p>

      <div className="componentsWrap">
        <ContactForm />
        <SearchBox value={searchPhrase} onChange={handleChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    </div>
  )
}

export default App
