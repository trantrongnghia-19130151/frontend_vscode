import React, { Component } from 'react'
import Specification from './Specification';
import cars from './arrayFeature.json';
import wheels from './wheels.json';
import PickCarColor from './PickCarColor';
import ShowImg from './ShowImg'
import Wheel from './Wheel';


export default class Main extends Component {
    state = {
        carList: cars[0],
        source: cars[0].srcImg,

    }
    handleOnClickColor = (id) =>{
        
        const index = cars.findIndex(item => item.id === id);
        this.setState({
            carList: cars[index],
            source: cars[index].srcImg,
        });
    }
    handleOnClickWheel = (idWheel) =>{
        const {carList} = this.state;
        const index = carList.wheels.findIndex(item => item.idWheel === idWheel);
        this.setState({
            source: carList.wheels[index].srcImg,
        })
    }
    render() {
        const {carList, source } = this.state;
        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-8">
                        <ShowImg source={source} />
                    </div>
                    <div className="col-4">
                        <PickCarColor cars={cars} handleOnClickColor={this.handleOnClickColor}/>

                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <Specification carList={carList}/>
                    </div>
                    <div className="col-4">
                        <Wheel wheels={wheels} handleOnClickWheel={this.handleOnClickWheel}/>
                    </div>
                </div>
            </div>

        )
    }
}
