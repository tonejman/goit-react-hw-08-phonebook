import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <h1 className={css.headline}>Create your account</h1>
      <label className={css.label}>
        Username
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Enter your name"
          aria-label="Input for your name"
        />
      </label>
      <label className={css.label}>
        Email
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Enter your email"
          aria-label="Input for your email"
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.input}
          type="password"
          name="password"
          placeholder="Password should be at least 7 characters"
          aria-label="Input for your password"
        />
      </label>
      <button className={css.button} type="submit">
        Register
      </button>
    </form>
  );
};
