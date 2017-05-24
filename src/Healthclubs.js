import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import SearchIcon from 'react-material-icons/icons/action/search';

class Healthclubs extends React.Component {
    render() {
        return(
        <div>
            <Card className="search-card">
                <form>
                    <input
                        name="search"
                        id="search"
                        type="text"
                        placeholder="Enter your Zip or City and State"
                        className="search-input"
                    />
                    <SearchIcon
                        className="search-icon"
                    />
                    <label
                        htmlFor="search">
                        Enter your Zip or City and State
                    </label>

                </form>
            </Card>
            {this.props.clubs.map(function (club) {
                return (
                    <Card className="club-card" key={club.id}>
                        <CardTitle title={club.name} className="title-spacing"/>
                        <CardText className="title-margin">
                            <p>{club.street}</p>
                            <p>{club.city} {club.state}, {club.zip}</p>
                            <p className="chain">
                                <strong>{club.is_chain.toString() === '1' ? 'Gym is part of a chain' : '' }</strong></p>
                        </CardText>
                    </Card>
                );
            })}
        </div>)
    }
}

export default Healthclubs;