import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    componentDidMount(){
        // this.handleFetch()
    }

    handleFetch = (e, searchTerm) => {
        e.preventDefault();
        const searchURL = 'https://api.giphy.com/v1/gifs/search?q='+ searchTerm +'&api_key=UdnFkIRWgx3nsJJBp7VB9gNe3vcv3jbM'
        fetch(searchURL)
        .then(response => response.json())
        .then (data => {
            const newData = Object.values(data)[0]
            const gifData = newData.splice(0, 3).map(gif => gif.images.original.url)
            console.log(newData)
            console.log(gifData)
            this.setState({
                gifs: gifData
            })
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row row-cols-2">
                    <GifList gifs={this.state.gifs} />
                    <GifSearch handleFetch={this.handleFetch} />
                </div>
            </div>
        )
    }
}