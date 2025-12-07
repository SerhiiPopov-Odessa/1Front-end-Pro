import PropTypes from 'prop-types';

export default function Results({ result }) {
  return (
    <>
      <div className="results-title">Результати голосування:</div>
      <div className="winner-title">Переможець:</div>
      <div className="winner">{result.id}</div>
      <div className="votes-count">Кількість голосів: {result.count}</div>
    </>
  );
}

// Валідація props
Results.propTypes = {
  result: PropTypes.shape({
    id: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  }).isRequired
};

// Значення за замовчуванням
Results.defaultProps = {
  result: { id: "Smile", count: 0 }
};