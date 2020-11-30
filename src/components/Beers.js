import React from 'react';
import BeersService from '../utils/api';
import { Link } from 'react-router-dom';

class Beers extends React.Component {
    state = {
        beers: []
    }

    componentDidMount() {
        const beersService = new BeersService();
        beersService.getAll()
            .then((response) => {
                console.log(response);
                this.setState({
                    beers: response.data //data is general axios call
                })
            }); 
    }

    render() {
        return(
            <div>
            <h3> List of beers </h3>
            {this.state.beers.map((beer) => {
                return (
                    <div key={beer._id}>
                    <Link to={`beers/${beer._id}`}>{beer.name}</Link> 
                    <p>{beer.tagline}</p>
                    <img src={beer.image_url} />
                    </div>
                )
            })}
            </div>
        )
    }
}

export default Beers;