import React from 'react'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

/*
The TotalCost Component is below
  -From the "App" Component, the "state.selected" prop is passed in
    -This effectively represents which options the user selected and with that, we have access to the cost of each item
  -The "total" variable identifies the cost of each item currently in the cart and sums it up
    -That value is used to populate the total amount
*/
class TotalCost extends React.Component {
    render() {

        const total = Object.keys(this.props.selectedCart).reduce(
            (acc, curr) => acc + this.props.selectedCart[curr].cost,
            0);
        
    return (
        <div className="summary__total">
            <div className="summary__total__label">
                Total
            </div>
            <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
            </div>
        </div>
    )};
}

export default TotalCost;