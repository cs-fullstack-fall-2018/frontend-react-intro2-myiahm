import React, { Component } from 'react';
class Netflix  extends Component {
    render() {
        return (<div>
            this.state.Netflix.map((index)=>
            (<p>The Movie {Netflix.movieName} was released in {Netflix.yearReleased} and is in
            the {Netflix.genere} genere.</p>))}</div>);
        const Netflix = Netflix.map((index) => [{
            movieName: "Sharknado",
            yearReleased: "2013",
            genere: "Horror Comedy"
        },
            {movieName: "Hush", yearReleased: "2016", genere: "horror Thriller"},
            {movieName: "Hills Have Eyes", yearReleased: "2005", genere: "Horror"}]);
        this.state = {Netflix};

    }
}

export default Netflix;

