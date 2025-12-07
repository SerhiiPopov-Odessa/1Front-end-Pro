import PropTypes from 'prop-types';

export default function Smile({ id, count, changeSmile }) {

  const increment = () => {
    changeSmile(id);
  };

  return (
    <>
      <div className="smiley-item" onClick={increment}>
        {id} <span>{count}</span>
      </div>
    </>
  );
}

// Валидация props
Smile.propTypes = {
  id: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  changeSmile: PropTypes.func.isRequired
};

// Значения по умолчанию
Smile.defaultProps = {
  id: "Smile"
};