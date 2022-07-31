import React, { Component } from 'react'

export default class ListGlass extends Component {
    render() {
        let glassList  = this.props.glassData;
       
        return (
            <div className="glasses mt-5">
            {glassList.map((glass, index) => {
                return (
                    <div className="glass" key={index} onClick={() => {this.props.handleChangeGlass(glass.id)}} >
                        <img src={`./glassesImage/g${glass.id}.jpg`}   />    
                    </div>
                    )  
                    
            })}                    
            
            
            </div>
        )
    }
}
