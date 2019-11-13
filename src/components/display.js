import React, {Component} from 'react';

export default class display extends Component {

    CelciustoFarenheit(celcius) {
        return Math.round(celcius * (9/5) + 32) + '\xB0' + " F";
    }

    render () {
        return (
            <React.Fragment>
                <div style={displaContainer} className={"container"}>
                    <div className={"row justify-content-center"}>
                        <h2>
                            {(this.props.city === "") ? <span>Temperature: </span> : <span>The Temperature in {this.props.city} is {this.CelciustoFarenheit(this.props.temperature)}</span>}
                        </h2>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

let displaContainer = {
    backgroundColor: '#eaf7e4',
    maxWidth: '100%',
    height: '15vh'
};

