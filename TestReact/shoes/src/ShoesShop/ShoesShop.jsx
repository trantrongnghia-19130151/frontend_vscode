import React, { Component } from 'react'
import ProductList from './ProductList'
import productList from './data.json';
import ShoppingList from './ShoppingList';

export default class ShoesShop extends Component {
    state ={
        shoppingList: [
            {
            id: 1,
            name: "Adidas Prophere",
            price: 350,
            image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
            quantity: 2,
        },
        ]
    }
    render() {
        const {shoppingList} = this.state;
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-7 text-right">
                        <h1>Shoes Shop</h1>
                    </div>
                    <div className="col-5 text-right">
                        <button className="btn btn-danger" data-toggle="modal" data-target="#shoppingList">Shopping List</button>
                    </div>
                </div>
                <ShoppingList shoppingList={shoppingList} />
                <ProductList productList={productList} />
            </div>
        )
    }
}
