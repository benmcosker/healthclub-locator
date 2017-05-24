import React from 'react';
import Clubs from './Clubs';
import './index.css';


export default ({clubs, filter}) => {
    const input = filter.toLowerCase();


    const clubName = clubs.filter((club) => {
            return !club.city.toLowerCase().indexOf(input);
        })
        .map((club, i) => {
            return (
                <Clubs
                    info={club}
                    key={i}
                />
            )
        });
    return (
        <span>
            {clubName}
        </span>
    )
}