import React, {Component} from 'react';
import DisplayMovie from "./DisplayMovie";

class Netflix extends Component {
    render() {

        const Netflix = [
            {
                movieName: "Sharknado",
                yearReleased: "2013",
                genere: "Horror Comedy"
            },

            {
                movieName: "Hush",
                yearReleased: "2016",
                genere: "horror Thriller"
            },

            {
                movieName: "Hills Have Eyes",
                yearReleased: "2005",
                genere: "Horror"
            }];

        return (
            <div>
                <DisplayMovie movieList={Netflix}/>
            </div>
        );


    }
}

export default Netflix;