import React, { Component } from 'react'
import Header from './Header'
import './style.css';
import glassData from './data.json';
import ListGlass from './ListGlass';
import GlassCenter from './GlassCenter';
export default class Home extends Component {
    state = {
        glass: glassData[0]
    }

    handleChangeGlass = (id) => {
        const index = glassData.findIndex(glass => glass.id === id)
        if (index != -1)
            this.setState({
                glass: glassData[index]
            })
    }
    render() {
        const{glass} = this.state;
        return (
            <div className="Home">
                <Header />
                <GlassCenter glass={glass} />
                <ListGlass glassData={glassData} handleChangeGlass={this.handleChangeGlass}/>
            </div>
        )
    }
}
