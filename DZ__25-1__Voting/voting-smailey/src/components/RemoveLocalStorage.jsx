import React, { Component } from 'react';
class RemoveLocalStorage extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    localStorage.removeItem("smiles");
  }
  render() {
 
  }
}

export default RemoveLocalStorage;