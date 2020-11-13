import React from 'react';
import RightCart from './RightCart';
import TotalCost from './TotalCost';

class CartAndTotal extends React.Component {
    render() {
        return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <RightCart 
            selected = {this.props.selected}  
            />
            <div className ="summary__total">
            <TotalCost
            selectedCart = {this.props.selected}
            />
            </div>
        </section>
    )}
}

export default CartAndTotal