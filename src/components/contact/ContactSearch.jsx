import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loadContacts } from '../../store/actions';

const ContactSearch = ({ loadContacts }) => {
  const [txt, setTxt] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    loadContacts(txt);
  };

  return (
    <form className='search' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Search Contact ...'
        value={txt}
        onChange={(e) => {
          setTxt(e.target.value);
          loadContacts(txt);
        }}
      />
      <span>
        <i className='fas fa-search'></i>
      </span>
    </form>
  );
};

const mapDispatchToProps = {
  loadContacts,
};
export default connect(null, mapDispatchToProps)(ContactSearch);
