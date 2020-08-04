import React from 'react';

const maleAvatar =
  'https://www.shareicon.net/data/512x512/2016/07/26/802026_man_512x512.png';
const femaleAvatar =
  'https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png';

const ContactPreview = ({ contact }) => {
  return (
    <div className='contact'>
      <div className='contact__left'>
        <img
          src={contact.gender === 'male' ? maleAvatar : femaleAvatar}
          alt='avatar'
        />
        <div className='contact__button'>
          <span>Delete</span>
          <span>Edit</span>
        </div>
      </div>
      <div className='contact__right'>
        <h2>{contact.name}</h2>
        <h3>
          <i className='fas fa-envelope'></i>
          {contact.email}
        </h3>
        <h4>
          <i className='fas fa-address-card'></i>
          {contact.address}
        </h4>
        <h5>
          <i className='fas fa-phone-square'></i>
          {contact.phone.mobile}
        </h5>
      </div>
    </div>
  );
};

export default ContactPreview;
