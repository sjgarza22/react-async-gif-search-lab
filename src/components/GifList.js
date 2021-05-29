import React, { Component } from 'react';

export default class GifList extends Component {
    render() {
        return(
            <div className="col-6">
                <ul>
                    {this.props.gifs.map(gif => <li><img className="img-responsive" src={gif} alt="" /></li>)}
                </ul> 
            </div>
        )
    }
}