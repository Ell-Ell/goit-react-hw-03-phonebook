import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li key={id} className={s.item}>
    <p className={s.name}>{name}</p>
    <p className={s.number}>{number}</p>
    <button
      type="button"
      className={s.button}
      onClick={() => {
        onDeleteContact(id);
      }}
    >
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
