import React, { Component } from 'react';
import { Carousel } from 'antd';
import './HomeCarousel.scss';
import { actFetchAllBannerApi } from '../module/actions';
import { connect } from 'react-redux';
class HomeCarousel extends Component {
  componentDidMount() {
    this.props.fetchAllBanner();
  }
  render() {
    const { bannerList } = this.props;

    return (

      <Carousel autoplay>
        {bannerList.map((banner) => (
                    
                    <div className="carousel" style={{backgroundImage: `url(${banner.hinhAnh})`}}>
                        <img className="w-100 h-100 opacity-0"  src={banner.hinhAnh}  />

                    </div>
                    

        ))}
      </Carousel>

    )
  }
}
const mapStateToProps = state => ({
  bannerList: state.homeReducers.banner,
  
});
const mapDispatchToProps = (dispatch) => ({
  fetchAllBanner: () => dispatch(actFetchAllBannerApi()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeCarousel);
