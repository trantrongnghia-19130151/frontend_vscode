import React, { Component } from 'react'

export default class ShowImg extends Component {
    render() {
        const { source } = this.props;
        
        return (
            
            
            // <div
            //     className="cloudimage-360"
            //     data-folder={`./images/${source}/`}
            //     data-filename="civic-{index}.jpg"
            //     data-amount="8"
            // >
    
            // </div>


            <div>
                <img src={`./images/${source}/civic-1.jpg`} className="w-100" alt="" />
            </div>
        )
    }
}
