import React, { Component } from 'react';
import Header from './Components/Header';
import CustomizeFeatures from './Components/CustomizeFeatures';
import './App.css'
import CartAndTotal from './Components/CartAndTotal';


/*
This is the App Component which is essentially the trunk of the tree we are building
  -Remember that when defining a class we include the extends React.Component statement
    --This statement creates an inheritance to React.Component, and gives our App component access to React.Component's functions
  -Remember that React Components have a built-in state object
    --This is where we will store property values that belong to the App Component
      --When the state object changes, the App Component will re-render
  -Remember that in order to change a value in the state object, we need to use this.setState method
*/
class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  /*
  The below function updateFeature is used to make updates to the state based on which feature a user selects
    -We declare a variable "selected" which is a representation of the state object (since we cannot mutate the actual state object above)
    -Next, we take the specific feature that was selected by the user and assign that to the newValue argument that was passed in
    -We then use "this.setState" method to change the value in the state object "selected"
  */
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });

  };

  /*
  Remember that the only method you must define in a React.Component subclass is render()
    -When render is called it should examine this.props and this.state and return something
    -The render method should be pure, meaning that it does not modify component state, it returns the same result each time it is invoked,
     and it does not directly interact with the browser
  Below we are rendering some of the Components we will see on the page in JSX
    -We are also passing props into some of these components based on "state" and "updateFeature" above
    -The other components will receive these props downstream and can use them
      -Three main components we want to show are the Header, CustomizeFeatures, RightCart
  */
  render() {
  return (
    <div className='App'>
      <Header />
      <main>
        <CustomizeFeatures 
          selected = {this.state.selected}
          updateFeature={this.updateFeature}
        />
        <CartAndTotal
          selected = {this.state.selected}
        />
      </main>
    </div>
  )};
}

export default App;
