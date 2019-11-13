import React from 'react';
import Userinput from './components/Userinput';
import Title from './components/Title';
import Display from './components/display';

export default class App extends React.Component {
    state = {
        city: "",
        temperature: ""
    };

    handleCityFromInput = (cityFromUser, weatherFromUser) => {
        this.setState({city: cityFromUser});
        this.setState({temperature: weatherFromUser})
    };

    render () {
        return (
            <div>
                <Title/>
                <Userinput onUserInput={this.handleCityFromInput}/>
                <Display city={this.state.city} temperature={this.state.temperature}/>
            </div>
        )
    };
}
