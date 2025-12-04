import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Smile extends Component {
  static defaultProps = {
    id: "Smile"
  };
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
  }

  increment(){
    this.props.changeSmile(this.props.id);
  };

  render() {
    return (
      <>
        <div className="smiley-item" onClick={this.increment}> {this.props.id} <span>{this.props.count}</span> </div>
      </>
    );
  }
}

// Валідація props
Smile.propTypes = {
  id: PropTypes.string.isRequired, // обов'язковий string
  //age: PropTypes.number,             // необов'язкове число
  //onClick: PropTypes.func,           // необов'язкова функція
};

// Значення по замовчуванню (необов'язково)
//Smile.defaultProps = {
  //age: 18,
  //onClick: () => alert('Default click'),
//};

export default Smile;