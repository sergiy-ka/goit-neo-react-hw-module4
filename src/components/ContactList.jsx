import css from "./ContactList.module.css";
import Contact from "./Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={css.contacts}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => onDelete(contact.id)}
        />
      ))}
    </div>
  );
};

export default ContactList;
