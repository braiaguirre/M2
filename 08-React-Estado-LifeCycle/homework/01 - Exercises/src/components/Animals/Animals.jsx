import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
    <div>
      <h5>{this.props.animal}</h5>
      
    </div>
  )}
}
