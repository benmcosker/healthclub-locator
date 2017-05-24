import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';

export default ({info}) => (
    <Card className="club-card">
        <CardTitle title={info.name} className="title-spacing"/>
        <CardText className="title-margin">
            <p>{info.street}</p>
            <p>{info.city} {info.state}, {info.zip}</p>
            <p className="chain">
                <strong>{info.is_chain.toString() === '1' ? 'Gym is part of a chain' : '' }</strong>
            </p>
            <p><a href={`http://maps.google.com/maps?z=12&t=m&q=${info.name}:${info.lat}+${info.lon}`} target="_blank">Google Maps</a></p>
        </CardText>
    </Card>
)