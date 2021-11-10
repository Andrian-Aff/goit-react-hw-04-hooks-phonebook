import PropTypes from 'prop-types';
import s from './Filter.module.css';


const Filter = ({filter, onChangeName, resetFilter})=> (
<label className={s.label}>Find contacts by name 
  <input className={s.input}
      type="text"
      name="filter"
      placeholder="input name/number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //   title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
      required
      value={filter}
      onChange={onChangeName}
      onBlur={resetFilter}
      />
</label>
)

Filter.protoTypes = {
  filter: PropTypes.string.isRequired,
  onChangeName: PropTypes.func,
  onBlur: PropTypes.func
}

export default Filter

