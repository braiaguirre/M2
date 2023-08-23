import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
    <div>
      {console.log(this.props)}
      
      <h5>{this.props[0]?.name}</h5>
      <img src={this.props[0]?.image} alt={this.props[0]?.name} width='300px' />
      <span>{this.props[0]?.specie}</span>
            
    </div>
  )}
}
