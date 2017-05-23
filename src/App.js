import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Healthclubs from './Healthclubs';

import './App.css';

class App extends Component {

    state = { clubs: [] };

    componentDidMount() {
        fetch('http://fe-test.preventure.com/api/v1/gyms')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ clubs: data});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (

            <div className="App">
                <MuiThemeProvider>
                    <Healthclubs clubs={this.state.clubs} />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
