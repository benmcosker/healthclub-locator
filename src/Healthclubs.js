import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import Search from './Search';


function Healthclubs(props) {
    return (
    <div>
        <Search />
        {props.clubs.map(function(club) {
            return (
                <Card className="club-card" key={club.id}>
                    <CardTitle title={club.name} className="title-spacing" />
                    <CardText className="title-margin">
                        <p>{club.street}</p>
                        <p>{club.city} {club.state}, {club.zip}</p>
                        <p className="chain"><strong>{club.is_chain.toString() === '1' ? 'Gym is part of a chain' : '' }</strong></p>
                    </CardText>
                </Card>
            );
        })}
    </div>
    );
}

export default Healthclubs;