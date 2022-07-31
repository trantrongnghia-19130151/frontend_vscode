import React, { Component } from 'react'

export default class PickCarColor extends Component {
    render() {
        let carList = this.props.cars;
        const {handleOnClickColor} = this.props;
        return (
            <div className="card " >
                <div className="card-header text-primary">
                    Exterior Color
                </div>
                <ul className="list-group list-group-flush">
                    {carList.map((car, index) => {
                        return (
                            <li type="button" className="list-group-item d-flex align-items-center" key={index} onClick={()=> handleOnClickColor(car.id)}>
                                <img src={car.img} width="50px" height="50px" className="mr-3" alt="" />
                                <div>
                                    <h4>{car.title}</h4>
                                    <p className="m-0 text-left">{car.type}</p>
                                </div>
                            </li>
                        )

                    })}
                </ul>
            </div>


        )
    }
}
