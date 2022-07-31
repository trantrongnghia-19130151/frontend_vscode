import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {
    render() {
        const { productList } = this.props;
        return (
            <div className="container">
                <div className="row">
                    {productList.map((shoes, index) => {
                        return (
                            <ProductItem shoes={shoes} />
                        )
                    })}
                </div>
            </div>

        )
    }
}
