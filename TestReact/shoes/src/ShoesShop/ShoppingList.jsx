import React, { Component } from 'react'

export default class ShoppingList extends Component {
    render() {
        const {shoppingList} = this.props;
        return (


            <div className="modal fade" id="shoppingList" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Shopping list</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {shoppingList.length > 0 ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {shoppingList.map((shoes, index) => {
                                        const {id, name, image, price, quantity} = shoes;
                                        return (
                                            <tr>
                                                <td>{id}</td>
                                                <td>{name}</td>
                                                <td>
                                                    <img src={image} width='30px' />
                                                </td>
                                                <td>{price}</td>
                                                <td>{quantity}</td>
                                                <td>{price*quantity}</td>
                                                <td>
                                                    <button className="btn btn-danger">Remove</button>
                                                </td>
                                            </tr>

                                        )
                                    }
                                    )}
                                </tbody>
                            </table>
                            ) :  ( <div className="text-center my-4">
                                Không có sản phẩm nào, mời quý khách hàng mua sắm
                            </div> )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

