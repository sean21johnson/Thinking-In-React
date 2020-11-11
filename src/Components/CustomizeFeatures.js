import React from 'react';
import FeaturesStore from './FeaturesStore';
import Feature from './Feature'

/*
The CustomizeFeatures Component is used to show the left-hand side of the UI where users have choices to customize their laptop
    -Within this Component, we create a "state" which represents the "FeaturesStore" object that we have imported
        --State will only have one property with a key of "features" and a value of "FeaturesStore"
    -In the render() we want to return a form
        --Within the form, we will return JSX and pass props into the "Feature" Component
            --It is important to note that "features" prop is just the state that we declared within this "CustomizeFeatures" component
            --The "selected" and the "updateFeature" props that we are passing down were actually originally passed down from the "App" Component, we're just passing them further down
*/
class CustomizeFeatures extends React.Component {

    state = {
        features: FeaturesStore
    }

    render() {

        return (
            <form className="main_form">
                <h2>Customize your laptop</h2>
                <Feature
                    features = {this.state.features}
                    selected = {this.props.selected}
                    updateFeature = {this.props.updateFeature} 
                />
            </form>
        )
    }
}

export default CustomizeFeatures