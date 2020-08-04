import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadContacts } from '../../store/actions';

import Loader from '../shared/Loader';
import ContactList from '../contact/ContactList';
import ContactSearch from '../contact/ContactSearch';

const Home = ({ loadContacts, contacts }) => {
  useEffect(() => {
    setTimeout(() => loadContacts(), 1000);
  }, [loadContacts]);

  return (
    <div className='home-wrapper'>
      <ContactSearch />
      {!contacts.length ? <Loader /> : <ContactList contacts={contacts} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.mainApp.contacts,
});
const mapDispatchToProps = {
  loadContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
