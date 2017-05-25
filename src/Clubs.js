import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default ({info}) => (
    <MuiThemeProvider>
        <Card className="club-card">
            <CardTitle title={info.name} className="title-spacing"/>
            <CardText className="title-margin">
                <p>{info.street}</p>
                <p>{info.city} {info.state}, {info.zip}</p>
                <p className="chain">
                    <strong>{info.is_chain.toString() === '1' ? 'Gym is part of a chain' : '' }</strong>
                </p>
                <p className="google-map"><a href={`https://www.google.com/maps/search/?api=1&query=${info.lat},${info.lon}`} target="_blank">Google Maps</a></p>
            </CardText>
        </Card>
    </MuiThemeProvider>
)