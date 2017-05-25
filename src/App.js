import React, { Component } from 'react';
import Listing from './Listing';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './Search';
import './index.css';

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
                <div className={'header-align'}>
                    <h2>Gym Listing</h2>
                </div>
                <MuiThemeProvider>
                    <Search
                        filterVal={this.state.filterText}
                        filterUpdate={this.filterUpdate.bind(this)}
                    />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <Listing
                        clubs={this.state.clubs}
                        filter={this.state.filterText}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
