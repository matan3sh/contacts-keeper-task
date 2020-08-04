import React from 'react';
import ContactPreview from './ContactPreview';

const ContactList = ({ contacts }) => {
  return (
    <div className='contacts'>
      {contacts.map((contact) => (
        <ContactPreview contact={contact} key={contact.id} />
      ))}
    </div>
  );
};

export default ContactList;
