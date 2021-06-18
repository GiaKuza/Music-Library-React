import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import CreateTable from './CreateTable';

class App extends Component { 
    constructor(props){
        super(props);

    this.state = { 
        music: []
        
    }
    
    }
    componentDidMount(){
        this.getAllSongs();
    }

    async getAllSongs(){
        let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
        this.setState({
            music: response.data
        });
    }

    render(){
        return(
            <>
                <NavBar />
                <CreateTable music={this.state.music} />
            </>
        );
    }
}

export default App;