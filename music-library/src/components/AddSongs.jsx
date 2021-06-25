
import React, {Component} from 'react';
import axios from 'axios';


class AddSongs extends Component{
    constructor(props){
        super(props);

        this.state = {
            "title": "",
            "album": "",
            "artist": "",
            "genre": "",
            "releaseDate": ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    
    //handleChange
    //build object from the form
    handleChange(event){
        console.log(event)
        this.setState({
        [event.target.name]: event.target.value
        });

        
    }

    //handleSubmit
    //make axios post call
    handleSubmit(event){
        
        event.preventDefault();
        axios.post('http://localhost:3000/api/songs/', this.state).then(res => {
            console.log(`statusCode: ${res.statusCode}`)
            console.log(res)
          })
        //clear the form
        this.setState ({
            "title": "",
            "album": "",
            "artist": "",
            "genre": "",
            "releaseDate": ""
        });

        }

    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='title'>Title</label>
          <input 
            name='title'
            placeholder='Title' 
            value = {this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='album'>Album</label>
          <input
            name='album' 
            placeholder='Album'
            value={this.state.album}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='artist'>Artist</label>
          <input
            name='artist' 
            placeholder='Artist'
            value={this.state.artist}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='genre'>Genre</label>
          <input
            name='genre' 
            placeholder='Genre'
            value={this.state.genre}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='releaseDate'>Release Date</label>
          <input
            name='releaseDate' 
            placeholder="mm/dd/yyyy"
            value={this.state.releaseDate}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button>Add this song</button>
        </div>
      </form>
        );
    }

}

export default AddSongs;