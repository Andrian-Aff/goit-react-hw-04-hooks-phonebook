import s from './Contacts.module.css'
import PropTypes from 'prop-types';

const ContactList =({contacts, onDeleteContact}) => (
    <ul className={s.list}>
        {contacts.map(({id, name, number}) => (
            <li key={id}
            className={s.list__item}>
              {name}:
                <span className={s.list__item__tel}>{number}</span>
            <button className={s.button} onClick={()=>onDeleteContact(id)}>Delete</button>
            </li>
        ))
        }

    </ul>
)

ContactList.proTotypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList