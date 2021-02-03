import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout/Layout';
import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactFrom';
import ContactsList from '../ContactsList/ContactsList';
import Notification from '../Notification/Notification';
import { CSSTransition } from 'react-transition-group';
import styles from './App.module.css';
import transitionTitle from './transition/transitionTitle.module.css';
import NotificationTransition from '../Notification/transitions/NotificationTransition.module.css';
import contactsActions from '../../redux/contacts/contactsActions';

class App extends Component {
  state = {
    isOpenModal: false,
  };

  componentDidMount(){
    const isLocalStorageNotEmpty = localStorage.getItem('contacts');

    if(isLocalStorageNotEmpty){
      const localStorageData = JSON.parse(localStorage.getItem('contacts'));
      this.props.onCheckContacts(localStorageData);
    }
  }

  handleOpenModal = () => {
    this.setState({isOpenModal: true});
    setTimeout(() => {
      this.setState({ isOpenModal: false });
    }, 3000);
  }

  render() {
    const { isOpenModal } = this.state;
    const { contacts } = this.props;

    return (
      <Layout>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={transitionTitle}
        >
          <h2 className={styles.title}>Phonebook</h2>
        </CSSTransition>

        <section className={styles.section}>
          <ContactForm openModal={this.handleOpenModal}/>
        </section>

        <h2 className={styles.title}>Contacts</h2>

        {contacts.length > 0 ? (
          <section className={styles.section}>
            <Filter />
            <ContactsList />
          </section>
        ) : (
          <h2>Your phonebook is empty.</h2>
        )}
        <CSSTransition
          in={isOpenModal}
          appear={true}
          classNames={NotificationTransition}
          timeout={250}
          unmountOnExit
        >
          <Notification />
        </CSSTransition>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});


const mapDispatchToProps = {
  onCheckContacts: contactsActions.getFromLS,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
