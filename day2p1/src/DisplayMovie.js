import React, {Component} from 'react';

class DisplayMovie extends Component {
    render() {
        var forEachItem =
            this.props.movieList.map(eachItem => {
                    return (
                        <div>
                            <ul>
                                <li>Movie: {eachItem.movieName}</li>
                                <li>Year Released: {eachItem.yearReleased}</li>
                                <li>Genere: {eachItem.genere}</li>
                            </ul>
                        </div>
                    );
                }
            );
        return (
            <div>
                <h1>{forEachItem}</h1>
                {/*<h1>Temp</h1>*/}
            </div>
        );
    }
}

export default DisplayMovie;

