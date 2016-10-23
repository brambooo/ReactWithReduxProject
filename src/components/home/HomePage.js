import React from 'react';
import {link} from 'react-router';  // react-router will be handling the link anchor tag and will link to the about page

class HomePage extends React.Component {
    return() {
        return (
            <div className="jumbotron">
                <h1>Adminpaneel</h1>
                <p>Welkom op het adminpaneel Bram</p>
                <link to="about" className="btn btn-primary btn-lg">Meer informatie</link>
            </div>
        )
    }
}

export default HomePage;