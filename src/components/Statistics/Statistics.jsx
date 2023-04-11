import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ state, total, positivePercentage }) => {
  const { good, neutral, bad } = state;
  return (
    <>
      <ul className={css['statistics-list']}>
        <li className={css['statistics-item']}>
          Good <span>{good}</span>
        </li>
        <li className={css['statistics-item']}>
          Neutral <span>{neutral}</span>
        </li>
        <li className={css['statistics-item']}>
          Bad <span>{bad}</span>
        </li>
      </ul>
      <ul className={css['statistics-result']}>
        <li className={css['statistics-total']}>
          Total: <span>{total}</span>
        </li>
        <li className={css['statistics-positive']}>
          Positive feedback: <span>{positivePercentage}</span>
        </li>
      </ul>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
