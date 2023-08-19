import css from './Home.module.css';
import phonebook from 'image/phone-book.jpg';

const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome to the personal <br /> phonebook app
      </h1>
      <div className={css.phone}>
        <img src={phonebook} alt="Logo" height="100" />
      </div>
    </div>
  );
};

export default Home;
