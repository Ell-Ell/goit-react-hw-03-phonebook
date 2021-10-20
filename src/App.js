import React, { Component } from 'react';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import ContactItem from './components/ContactItem';

import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = newContact => {
    // console.log(newContact);

    const { contacts } = this.state;
    const contactExist = contacts.find(
      elem => newContact.name.toLowerCase() === elem.name.toLowerCase(),
    );

    if (contactExist) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      const contact = {
        id: uuidv4(),
        name: newContact.name,
        number: newContact.number,
      };

      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getVisibleContacts();

    return (
      <>
        <div>
          <Container>
            <h1 className="title">Phonebook</h1>
            <ContactForm onSubmit={this.formSubmitHandler} />

            <h2 className="title">Contacts</h2>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              ListItem={ContactItem}
              contacts={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          </Container>
        </div>
      </>
    );
  }
}

export default App;
