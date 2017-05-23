import React, { Component } from 'react';
import Healthclubs from './Healclubs';
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
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Country</th>
                            <th>Longitude</th>
                            <th>Latitude</th>
                            <th>Chain</th>

                        </tr>
                    </thead>
                    <Healthclubs clubs={this.state.clubs} />
                </table>
            </div>
        );
    }
}

export default App;
