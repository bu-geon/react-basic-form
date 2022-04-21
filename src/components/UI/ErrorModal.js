import ReactDom from 'react-dom';

import Button from './Button';
import Card from './Card';
import styles from './ErrorModal.module.css';

const ErrorMessage = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onCloseError} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onCloseError}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

const ErrorModal = (props) => {
  return ReactDom.createPortal(
    <ErrorMessage
      title={props.title}
      message={props.message}
      onCloseError={props.onCloseError}
    />,
    document.getElementById('error-root')
  );
};

export default ErrorModal;
