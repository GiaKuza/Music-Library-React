import React, {Component} from 'react';
import './SearchBar.css'

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {}
        
    }

    handleChange(event){
        console.log(event.target.name);
        console.log(event.target.value);
     this.setState({
         [event.target.name]: event.target.value
        });
    }

    

    render(){
        return(
            <form action="/" method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden">Find artists, albums, songs and more</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Find artists, albums and more"
                    name="s" 
                    value={this.state.searchCriteria}
                    onChange={this.handleChange}
                />
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default SearchBar;