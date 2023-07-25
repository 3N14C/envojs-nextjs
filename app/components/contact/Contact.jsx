import styles from './contact.module.scss'

const Contact = () => {
  return (
    <div className={`${styles.contact}`}>
      <form className={`${styles.contact_form}`} action="">
        <p className={`${styles.contact_title}`}>
          Contact us for the service you want to use
        </p>
        <button className={`${styles.contact_btn}`}>Contact us</button>
      </form>
    </div>
  );
};

export { Contact };
