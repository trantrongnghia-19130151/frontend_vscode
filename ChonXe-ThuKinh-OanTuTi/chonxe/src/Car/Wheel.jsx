import React, { Component } from 'react'

export default class Wheel extends Component {
    render() {
        let wheel = this.props.wheels;
        
        return (
            
                <div className="card mt-2">
                    <div className="card-header text-primary">
                        Wheels
                    </div>
                    <ul className="list-group list-group-flush">
                        {
                            wheel.map((wheel, index) => {

                                return (
                                    <li type="button" className="list-group-item d-flex align-items-center" key={index} onClick={() => {this.props.handleOnClickWheel(wheel.idWheel)}}>
                                        
                                            <div className="col-2">
                                                <img src={wheel.img} width="50px" height="50px" />
                                            </div>
                                            <div className="col-10 pl-3">
                                                <h4 className="text-left" style={{fontSize: '20px'}}>{wheel.title}</h4>
                                                <p className="text-left"><b>Price: </b>{wheel.price}$</p>
                                            </div>
                                            
                                        
                                    </li>
                    )
                        })
                    }
                    </ul>
            </div>
            
        )
    }
}
