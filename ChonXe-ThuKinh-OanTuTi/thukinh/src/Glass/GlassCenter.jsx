import React, { Component } from 'react'
import ProductInfo from './ProductInfo';

export default class GlassCenter extends Component {
    render() {
        const {glass} = this.props;
        return (
            <div>
                <div className="model">
                    <div className="leftImg">
                        <img src="./glassesImage/model.jpg"/>
                        <ProductInfo glass={glass}/>
                    </div>
                    
                    <div className="rightImg">
                        <img src="./glassesImage/model.jpg"/>
                    </div>
                </div>
            </div>
        )
    }
}
