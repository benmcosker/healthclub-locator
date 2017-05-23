import React from 'react';


function Healthclubs(props) {
    return (
        <tbody>
        {props.clubs.map(function(club) {
            return (
                <tr key={club.id}>
                    <td>{club.id}</td>
                    <td>{club.name}</td>
                    <td>{club.street}</td>
                    <td>{club.city}</td>
                    <td>{club.state}</td>
                    <td>{club.zip}</td>
                    <td>{club.country}</td>
                    <td>{club.lon}</td>
                    <td>{club.lat}</td>
                    <td>{club.is_chain.toString()}</td>
                </tr>
            );
        })}
        </tbody>
    );
}

export default Healthclubs;