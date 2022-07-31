
import React, { Component } from 'react'
import HomeCarousel from './Carousel/HomeCarousel'
import MovieList from './MovieList/MovieList'
import { Select } from 'antd';
import './Home.scss'


export default class Home extends Component {
   
    render() {
     
        const { Option } = Select;
        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        return (
            <div>

                <HomeCarousel />
                <div className="filter mt-2" style={{ backgroundColor: 'grey' }}>
                    <Select className="m-2" defaultValue="Chọn phim" style={{ width: 120 }} onChange={handleChange}>
                      
                            <Option value="">Nàng thơ</Option>
                     
                    </Select>
                    <Select className="m-2" defaultValue="Chọn rạp" style={{ width: 120 }} onChange={handleChange}>
                        
                            <Option value="">CGV</Option>
                    
                    </Select>
                    <Select className="m-2" defaultValue="Chọn ngày chiếu" style={{ width: 120 }} onChange={handleChange}>
                       

                                    <Option value="">25/9/2021</Option>
                                
                    </Select>
                    <Select className="m-2" defaultValue="Chọ giờ chiếu" style={{ width: 120 }} onChange={handleChange}>
                   

                                    <Option value="">8:30</Option>
                                
                    </Select>
                </div>
                <MovieList />

            </div>
        )
    }
}

