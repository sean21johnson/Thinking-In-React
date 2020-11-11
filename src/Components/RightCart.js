import React from 'react';


/*
The USDCurrencyFormat function is just used to format any currencies that are passed in into USD denomination
*/
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

/*
The RightCart component is below
    -This component will receive "this.props.selected" as a prop
        -This prop represents which item the user selected (there should be 4 selections total)
    -"Summary" is declared and represents an array which populates each of the items in the cart with a name and cost
        -Summary is also returned from the render() function and it will reflect all of the items in your cart on the right-hand side of the page
*/
class RightCart extends React.Component {
    render() {
        const selected = this.props.selected;
        
        const summary = Object.keys(selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = selected[feature];

        return (
            <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(selectedOption.cost)}
                </div>
            </div>
        )
        })
        return summary;
    }

}

export default RightCart
