import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Healthclubs from './Healthclubs';
import Search from './Search';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            clubs: []
        }
    }


    filterUpdate(value) {
        this.setState({
            filterText: value
        });
    }

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
                    <Search
                        filterVal={this.state.filterText}
                        filterUpdate={this.filterUpdate.bind(this)}
                    />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <Healthclubs
                        clubs={this.state.clubs}
                        filter={this.state.filterText}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
