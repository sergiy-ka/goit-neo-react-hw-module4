import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={css.contact}>
      <div className={css.contact__container}>
        <div className={css.contact__name}>
          <FaUser className={css.contact__icon} />
          <p>{name}</p>
        </div>
        <div className={css.contact__number}>
          <FaPhoneAlt className={css.contact__icon} />
          <p>{number}</p>
        </div>
      </div>
      <div className={css.contact__actions}>
        <button className={css.contact__actionsBtn} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
