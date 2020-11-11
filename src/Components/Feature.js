import React from 'react';
import slugify from 'slugify';
import FeatureOptions from './FeatureOptions'


/*
The "Feature" Component is below
    -First we destructure "this.props.features" to the variable "features" to make the subsequent code more legible
    -Next we are creating a new array called "featureList" which takes the key in each array from "this.props.features" and concatenates it with the index of the array
     to create a variable called "featureHash"
        --Example would be "Processor-0" and "Operating System-1" ==> this will be used later in the return to give each item a unique key
    -Then we create a new array within called "options" which maps each of the items into a json stringify object
        --And then certain props are passed down to the "FeatureOptions" Component:
            --item, key, itemHash, name, selected, updateFeature, featureChoice, cost
    -We then return a fieldset that shows the a feature (there should be 8 total features reflecting when map is complete)
    -Finally we return the FeatureList array
*/

class Feature extends React.Component {
    render() {

        const features = this.props.features;

        const featureList = Object.keys(features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return <FeatureOptions
                    item = {item}
                    key = {itemHash}
                    itemHash = {itemHash}
                    name = {item.name}
                    selected = {this.props.selected}
                    updateFeature = {this.props.updateFeature}
                    featureChoice = {feature}
                    cost = {item.cost}
                ></FeatureOptions>
            });

            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className ="feature_name">
                        <h3>{feature}</h3>
                    </legend>
                        {options}
                </fieldset>
            )
        })
        return featureList;
    }
}

export default Feature;