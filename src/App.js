import React, {Component} from 'react';
import './App.css';
import Hero from './Components/Hero.js';
import Product from './Components/Product.js';
import Summary from './Components/Summary.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cart: [] ,
        total: 0
    }
  }
 buy = (thing, price) =>  {
this.ListeningStateChangedEvent((state) => {
    state.cart.push(thing)
    state.total += parseFloat(price)
    return state
})

 }
  render() {
    return (
      <div className="App">
        <Hero />
        <Product type="Laptop" price="999.00" buy = {this.boy}/>
        <Product type="Mechanical Pencil" price="0.25" buy = {this.boy}/>
        <Product type="College Ruled Loose Leaf" price="2.75" buy = {this.boy}/>
        <Product type ="Eraser" price = "8.00" buy ={this.boy}/>
        <Summary globalState={this.state} />
      </div>
    );
  }
}

export default App;
