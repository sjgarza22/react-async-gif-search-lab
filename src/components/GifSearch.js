import React, { Component } from 'react';

export default class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ""
        }
    }

    handleSearchTermChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return(
            <div className="col-6">
                <form onSubmit={event => this.props.handleFetch(event, this.state.searchTerm)}>
                    <input onChange={event => this.handleSearchTermChange(event)} type="text" value={this.state.searchTerm} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}