import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const {shoes} = this.props;
        return (
            <div className="col-4" style={{paddingBottom: '30px'}}>
                <div className="card">
                    <img className="card-img-top" src={shoes.image} />
                    <div className="card-body">
                        <h4 className="card-title">{shoes.name}</h4>
                        <p className="card-text">{shoes.price}</p>
                        <button className="btn btn-danger">Add to cart</button>
                    </div>
                </div>
            </div>

        )
    }
}
