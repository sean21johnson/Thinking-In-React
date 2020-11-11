import React from 'react';
import slugify from 'slugify';


/*
The USDCurrencyFormat function is just used to format any currencies that are passed in into USD denomination
*/
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

/*
This is the "FeatureOptions" Component
    -We first want to destructure the props that were passed in from the "Feature" Component
    -We then want to return jsx that gives each of the inputs unique properties passed down from the props in the "Feature" Component
        -Since each of these was populated with "map" from the "Feature" Component it will create 8 instances, each representing one of the options from the featuresStore
        -OnChange function is used to let the user select between each of the choices
 */
class FeatureOptions extends React.Component {

    render() {

        const { item, itemHash, name, selected, updateFeature, featureChoice, cost } = this.props;

        return (
            <div key={itemHash}
                className="feature__item">
                <input
                    type="radio"
                    id={slugify(name)}
                    className="feature__option"
                    name={slugify(name)}
                    checked={item.name === selected[featureChoice].name}
                    onChange={e => updateFeature(featureChoice, item)}
                />
                <label htmlFor={slugify(name)} className="feature__label">
                    {name} ({USCurrencyFormat.format(cost)})
                </label>
            </div>
        );
    }
}

export default FeatureOptions;