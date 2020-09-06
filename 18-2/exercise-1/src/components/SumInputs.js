import React from 'react';
import SumContext from '../context/SumContext';

// using context.consumer
/* export default class SumInputs extends React.Component {
  render() {
    return (
      <SumContext.Consumer>
        {({ valueA, valueB, valueC }) => (
            <p>{valueA + valueB + valueC}</p>
          )
        }
      </SumContext.Consumer>
    )
  }
} */

//using contextType
export default class SumInputs extends React.Component {
  render() {
    const { valueA, valueB, valueC } = this.context;
    return (
      <p>{valueA + valueB + valueC}</p>
    )
  }
}

SumInputs.contextType = SumContext;