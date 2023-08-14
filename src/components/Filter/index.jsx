import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const addFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={addFilter}
      ></input>
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  addFilter: PropTypes.func,
};
export default Filter;
