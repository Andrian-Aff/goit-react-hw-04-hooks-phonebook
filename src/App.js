import React, { Component } from 'react';
import shortid from 'shortid';
import contacts from './components/ContactsList/contacts.json'
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactsList';
import Filter from './components/Filter';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts,
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
     this.setState({contacts: parseContacts
     })
    }
  }
  
    componentDidUpdate(prevProps, prevState) {
      if(this.state.contacts !== prevState.contacts) {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
      }
    }
    

  handleChangeName = e =>{
    const {name, value} = e.target
    this.setState(
      {[name]: value})
      console.log(e.target.name) 
  };

  addContact = ({name, number}) => {
   console.log({name, number})
   const contact = {
   id: shortid.generate(),
   name,
   number,
   }
   this.setState(prevState => ({
    contacts:[contact, ...prevState.contacts]}))
   };

   getVisibleContacts = () => {
    const {contacts, filter} =this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact=> contact.name.toLocaleLowerCase().includes(normalizedFilter)||
    contact.number.includes(normalizedFilter));
   }

   resetFilter = () => {
    this.setState({ filter: '' });
  }

  deleteContact = (contactId) => {
    this.setState(({contacts})=> ({
      contacts: contacts.filter(contact=> contact.id !== contactId)
    }))
  };

  render() {
    const {contacts, filter} =this.state;
   
    const visibleContacts =  this.getVisibleContacts()
    // const countContacts = contacts.length
    return (
      <div className={s.container}>
        <div className={s.phonebook}>
          <h1 className={s.title}>Phonebook</h1>
          
          <ContactForm 
          contacts={contacts}
          onSubmit={this.addContact}/>

          <h2 className={s.titleContacts}>Contacts</h2>
          <Filter 
          filter={filter}
          resetFilter={this.resetFiler}
          onChangeName={this.handleChangeName}
          />
          <ContactList 
          contacts={visibleContacts} 
          onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
