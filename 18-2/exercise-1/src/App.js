import React from 'react';
import SumContext from './context/SumContext';
import SumInputs from './components/SumInputs';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      valueA: 0,
      valueB: 0,
      valueC: 0,
    }
  }

  handleChange(info, event) {
    let number = parseInt(event.target.value);
    if (isNaN(number)){
      this.setState({[`value${info}`]: 0});
    } else {
      this.setState({[`value${info}`]: number});
    }
    
  }

  render() {
    return (
      <div className="App">
        <SumContext.Provider value={this.state}>
          <input type="number" onChange={(event) => this.handleChange("A", event)}></input>
          <input type="number" onChange={(event) => this.handleChange("B", event)}></input>
          <input type="number" onChange={(event) => this.handleChange("C", event)}></input>
          <SumInputs />
        </SumContext.Provider>
      </div>
    );
  }
}

export default App;
