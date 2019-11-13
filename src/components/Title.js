import React, {Component} from 'react';

export default class Title extends Component {
    render () {
        return (
            <React.Fragment>
                <div id={"title"} style={titleBarStyle} className={"container"}>
                    <div style={titleBarRow} className={"row justify-content-center"}>
                        <h1 style={title}>Weather Analyser</h1>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const titleBarStyle = {
    backgroundColor: '#f7a6a7',
    maxWidth: '100%',
    height: '20vh'
};

const titleBarRow = {
    paddingTop: '40px'
};

const title = {
    color: 'black'
};
