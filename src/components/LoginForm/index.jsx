import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <h1 className={css.headline}>Log in to Phonebook</h1>
      <label className={css.label}>
        Email
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Your email"
          aria-label="Input for your email"
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.input}
          type="password"
          name="password"
          placeholder="Your password"
          aria-label="Input for your password"
        />
      </label>
      <button className={css.button} type="submit">
        Log In
      </button>
    </form>
  );
};
