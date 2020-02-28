import React, { Component } from 'react'
import List from './List';
import request from 'superagent';

export default class Search extends Component {
    state = {
        characters: [],
        input: '',
    }

    handleSearch = async () => {
        const data = await request.get(`https://favorites-app-backend.herokuapp.com/api/starwars/?search=${this.state.input}`)

        this.setState({
            characters: data.body.results,
        });
    }


    render() {
        return (
            <div>
                <input value={this.state.input} onChange={(e) => this.setState({input: e.target.value})} />
                <button onClick={this.handleSearch}>Search</button>
                <List characters={this.state.characters} />     
            </div>
        )
    }
}
