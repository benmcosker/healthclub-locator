import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import './index.css';

export default ({info}) => (
    <Card className="club-card">
        <CardTitle title={info.name} className="title-spacing"/>
        <CardText className="title-margin">
            <p>{info.street}</p>
            <p>{info.city} {info.state}, {info.zip}</p>
            <p className="chain">
                <strong>{info.is_chain.toString() === '1' ? 'Gym is part of a chain' : '' }</strong>
            </p>
        </CardText>
    </Card>
)