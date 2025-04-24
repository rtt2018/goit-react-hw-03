import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import { nanoid } from 'nanoid'

function App() {

  const initPhoneBook = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const initAddContactValues = {
    contactName: "",
    contactPhone: ""
  };

  const [phoneBook, setPhoneBook] = useState((JSON.parse(window.localStorage.getItem("superNinjaContacts")) ?? initPhoneBook));
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleChange = (evt) => {
    setSearchPhrase(evt.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem("superNinjaContacts", JSON.stringify(phoneBook));
  }, [phoneBook]);

  const filteredContacts = phoneBook.filter(abonent =>
    abonent.name.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  const handleSumit = (values, actions) => {
    setPhoneBook([
      ...phoneBook,
      { id: nanoid(), name: values.contactName, number: values.contactPhone }
    ]);
    actions.resetForm();
  }

  const clickDeleteButton = (id) => {
    setPhoneBook((prevPhoneBook) => {
      return prevPhoneBook.filter((contact) => contact.id !== id)
    })
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div className="componentsAllWrap">
        <div className="componentsWrap">
          <ContactForm onSubmit={handleSumit} initValues={initAddContactValues} />
          <SearchBox value={searchPhrase} onChange={handleChange} />
        </div>
        <div className="componentsWrap">
          <ContactList contacts={filteredContacts} onDelete={clickDeleteButton} />
        </div>
      </div>
    </div>
  )
}

export default App
