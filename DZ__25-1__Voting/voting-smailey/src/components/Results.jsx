import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Results extends Component {
  static defaultProps = {
    id: "Smile"
  };
  constructor(props) {
    super(props);
  }
  
  render() {
    const { result } = this.props;
    return (
      <>
        {/* <div className="smiley-item" onClick={this.increment}> {this.props.id} <span>{this.props.count}</span> </div> */}
        <div className="results-title">Результати голосування:</div>
        <div className="winner-title">Переможець:</div>
        <div className="winner">{result.id}</div>
        <div className="votes-count">Кількість голосів: {result.count}</div>
      </>
    );
  }
}

// Валідація props
Results.propTypes = {
  id: PropTypes.string.isRequired, // обов'язковий string
  //age: PropTypes.number,             // необов'язкове число
  //onClick: PropTypes.func,           // необов'язкова функція
};
// Значення по замовчуванню (необов'язково)
//Results.defaultProps = {
//age: 18,
//onClick: () => alert('Default click'),
//};

export default Results;