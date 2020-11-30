import React from 'react';
import BeersService from '../utils/api';
import { withRouter } from 'react-router-dom'; 

class AddBeer extends React.Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''        
    }

    handleChange = (event) => {
        let { name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const beerService = new BeersService(); 
        beerService.addBeer(this.state).then(() => {
            this.props.history.push('/beers');
        });
    }

    render() {
      return (
        <div className="inputBox">
          <form onSubmit={this.addNewBeer}>
          <input type='text' name='name' placeholder='name' onChange={this.handleOnTyping} />
          <input type="text" name="tagline" placeholder='tagline' onChange={this.handleOnTyping} />
          <input type="text" name="description" placeholder='description' onChange={this.handleOnTyping} />
          <input type="text" name="first_brewed" placeholder='first brewed' onChange={this.handleOnTyping} />
          <input type="text" name="brewers_tips" placeholder='brewers tips' onChange={this.handleOnTyping} />
          <input type="number" name="attenuation_level" placeholder='attenuation level' onChange={this.handleOnTyping} />
          <input type="text" name="contributed_by" placeholder='contributed by' onChange={this.handleOnTyping} />
          <button type='submit'>Add New Beer</button>
          </form>  
        </div>
      );
    }
  }

export default withRouter(AddBeer);