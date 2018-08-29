import React, { Component } from 'react';
class DisplayMovie  extends Component {
    render() {
        return (
            <div>
            <h2>Movie: {this.props.movieName}</h2>
            <h2>Year Released: {this.props.yearReleased}</h2>
                <h2>Genere: {this.props.genere}</h2>
        </div>)};

    }

export default DisplayMovie;

