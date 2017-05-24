import React from 'react';
import Clubs from './Clubs';
import './index.css';


export default ({clubs, filter}) => {
    const input = filter.toLowerCase();
    let clubCity;
    let clubZip;

    if (isNaN(filter)) {
            clubCity = clubs.filter((club) => {
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
    } else {
        clubZip = clubs.filter((club) => {
            return !club.zip.indexOf(input);
        })
            .map((club, i) => {
                return (
                    <Clubs
                        info={club}
                        key={i}
                    />
                )
            });
    }

    return (
        <span>
            {clubCity}
            {clubZip}
        </span>
    )
}