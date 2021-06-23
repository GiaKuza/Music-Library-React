import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import CreateTable from './CreateTable';
import SearchBar from './SearchBar'

class App extends Component { 
    constructor(props){
        super(props);

    this.state = { 
        music: [],
        filter: ''
        
    }
    
    }
    componentDidMount(){
        this.getAllSongs();
    }

    async getAllSongs(){
        let response = await axios.get('http://localhost:3000/api/songs/');
        this.setState({
            music: response.data
        });
    }

    handleChange(event){
        console.log(event)
        this.setState({
        filter: event.target.value
        });
    }


    render(){
        let filteredmusic = this.state.music.filter(song => {
            if(song.title.toLowerCase().includes(this.state.filter.toLowerCase()) ||
              (song.album.toLowerCase().includes(this.state.filter.toLowerCase()) ||
              (song.artist.toLowerCase().includes(this.state.filter.toLowerCase())||
              (song.genre.toLowerCase().includes(this.state.filter.toLowerCase()) ||
              (song.releaseDate.toLowerCase().includes(this.state.filter.toLowerCase())) ))))
            return true;
          
        })
        return(
            <>
                <NavBar />
                <SearchBar handleChange={(event)=>this.handleChange(event)} />
                <p>{this.state.filter}</p>
                <CreateTable music={filteredmusic} />
            </>
        );
    }
}

export default App;