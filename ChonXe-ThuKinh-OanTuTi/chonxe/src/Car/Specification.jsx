import React, { Component } from 'react'

export default class Specification extends Component {
    render() {
        const {carList} = this.props;
        return (
            <div>
                <div className="card mt-2">
                    <div className="card-header text-primary text-left">
                        <h3>See more LX features</h3>
                    </div>
                    <div className="p-3">
                        <table className="table table-bordered text-left">
                            <tbody>
                                <tr>
                                    <td>Color</td>
                                    <td>{carList.color}</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>{carList.price}$</td>
                                </tr>
                                <tr>
                                    <td>Engine type</td>
                                    <td>{carList.engineType}</td>
                                </tr>
                                <tr>
                                    <td>Displacement</td>
                                    <td>{carList.displacement}</td>
                                </tr>
                                <tr>
                                    <td>Horsepower (SAE net)</td>
                                    <td>{carList.horsepower}</td>
                                </tr>
                                <tr>
                                    <td>Torque (SAE net)</td>
                                    <td>{carList.torque}</td>
                                </tr>
                                <tr>
                                    <td>Redline</td>
                                    <td>{carList.redline}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
