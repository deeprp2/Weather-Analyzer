import React, {Component} from 'react';
import axios from "axios";
import CelciusFarenheit from './CelciusFarenheit';

export default class Userinput extends Component {
    state={
        value: "",
        temp: ""
    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    handleSubmit = (event) => {
        try {
            if (this.state.value !== "") {
                var url = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=" + this.state.value + "&units=metric&appid=" + process.env.REACT_APP_API_KEY;
                axios.get(url)
                    .then(res => {
                        this.setState({temp: res.data.main.temp});
                        this.props.onUserInput(this.state.value, this.state.temp);
                    });
            }
        }
        catch {
            console.log("Error");
        }

        event.preventDefault();
    };

    render () {
        return (
            <div id={"input-container"} style={inputContainer} className={"container"}>
                <div id={"input-container-row"} style={inputContainerRow} className={"row justify-content-center"}>
                    <form onSubmit={this.handleSubmit}>
                        <span>
                            Enter City Name:
                        </span>

                        <input type="text" style={cityInput} placeholder="Search..." onChange={this.handleChange}/>
                        <input id={"input-button"} style={inputButton} className={"btn btn-primary"} type="submit" value="Submit" />
                        <CelciusFarenheit />

                    </form>
                </div>
            </div>
        )
    }
}

const inputContainer = {
    backgroundColor: '#eaf7e4',
    maxWidth: '100%',
    height: '15vh'
};

const cityInput = {
    borderRadius: '5px',
    marginLeft: '10px'
};

const inputContainerRow = {
    paddingTop: '35px'
};

const inputButton = {
    marginLeft: '15px'
};




