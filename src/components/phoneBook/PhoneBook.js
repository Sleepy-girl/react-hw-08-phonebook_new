import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import AlertError from "../alertError/AlertError";
import ContactForm from "../contactForm/ContactForm";
import Filter from "../filter/Filter";
import ContactList from "../contactList/ContactList";
import styles from "../app.module.css";

function PhoneBook({ items, alert }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapperTitleWithAlert}>
          <CSSTransition
            classNames={styles}
            in={true}
            appear={true}
            timeout={500}
            unmountOnExit
          >
            <h1 className={styles.title}>Phonebook</h1>
          </CSSTransition>
          {alert && <AlertError />}
        </div>
        <ContactForm />
        {items.length > 0 ? (
          <div>
            {items.length > 1 && <Filter />}
            <ContactList />
          </div>
        ) : (
          <h2 className={styles.titleEmpty}>No records yet.</h2>
        )}
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    items: state.contacts.items,
    alert: state.contacts.alert,
  };
};

export default connect(mapStateToProps)(PhoneBook);
