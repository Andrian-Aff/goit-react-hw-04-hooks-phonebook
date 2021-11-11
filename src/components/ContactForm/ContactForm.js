  import s from './ContactForm.module.css';
  import PropTypes from 'prop-types';
  import React, {Component} from 'react';
  import {useState} from 'react'
  

  export default function ContactForm({contacts, addContact}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('')

    const handleChangeName = e => {
      const {name, value} = e.target;
      switch (name){
        case'name':
          setName(value)
          break;
        case'number':
          setNumber(value)
          break;
        default:
          return;
      }
    } 

    
   const reset =()=> {
      name = '';
      number = ''
    }

    return (
    <form className={s.form} onSubmit={handleSubmit}>
    <label className={s.labelForm}>Name
      <input className={s.inputForm}
        type="text"
        name="name"
        placeholder="Sara Winters"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        onChange={handleChangeName}
        onBlur={checkedName }
      />
    </label>
    <label className={s.labelForm}>Number
      <input className={s.inputForm}
          type="tel"
          name="number"
          placeholder="123-45-67"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChangeName}
        />
      </label>
  
    <button className={s.btnForm} type="submit" disabled={!name}>Add contact</button>
  </form>
   );} 
  }

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   }
 
//   checkedName = ()=> {
//     const {name} = this.state
//     if (this.props.contacts.find(contact => 
//       contact.name.toLowerCase() === name.toLowerCase()))
//       {alert(`${name} is already in contacts.`)
//       this.reset()
//       }
      
//   } 


//   handleChangeName = e =>{
//     const {name, value} = e.target
//     this.setState({ [name]: value})
//       // console.log(e.target.value)
//       // console.log(e.target.name)
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset()
//   };

//   reset =()=> {
//     this.setState({
//       name: '',
//       number: '',
//     })
//   }

//   render() {
//     const {name, number} = this.state
//     return (
//   <form className={s.form} onSubmit={this.handleSubmit}>
//     <label className={s.labelForm}>Name
//       <input className={s.inputForm}
//         type="text"
//         name="name"
//         placeholder="Sara Winters"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//         required
//         value={name}
//         onChange={this.handleChangeName}
//         onBlur={this.checkedName }
//       />
//     </label>
//     <label className={s.labelForm}>Number
//       <input className={s.inputForm}
//           type="tel"
//           name="number"
//           placeholder="123-45-67"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//           required
//           value={number}
//           onChange={this.handleChangeName}
//         />
//       </label>
  
//     <button className={s.btnForm} type="submit" disabled={!name}>Add contact</button>
//   </form>
//    );} 
// }

// ContactForm.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.number,
// }
// export default ContactForm;