import React, {Component} from 'react';

export default class CelciusFarenheit extends Component {

    CelciustoFarenheit(celcius) {
        return Math.round(celcius * (9/5) + 32) + '\xB0' + " F";
    }

    render () {
        return (
            <React.Fragment>
                <div>
                    <button type="button" className={"btn btn-primary"}>
                        C
                    </button>
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

