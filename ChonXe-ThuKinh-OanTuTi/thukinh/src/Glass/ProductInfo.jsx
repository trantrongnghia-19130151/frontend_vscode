import React, { Component } from 'react'

export default class ProductInfo extends Component {
    render() {
        const {glass} = this.props;
        return (
            
            <div className="info">
                <img src={glass.url} alt="" />
                <div className="text">
                    <h4>{glass.name}</h4>
                    <p>{glass.desc}</p>
                </div>
            </div>
            
        )
    }
}
