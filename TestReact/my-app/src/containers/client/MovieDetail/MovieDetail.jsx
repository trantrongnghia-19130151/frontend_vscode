
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import './MovieDetail.scss'
import moment, { Moment } from 'moment';
import { actFetchMovieDetail } from './module/actions'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'

class MovieDetail extends Component {
    componentDidMount() {
        const { params } = this.props.match;
        this.props.fetchMovieDetail(params.movieId);
    }
    render() {
        const { movieDetail } = this.props;
        console.log(movieDetail);
        return (
            <>
                <div className="movie" style={{ backgroundImage: `url(${movieDetail.hinhAnh})`, minHeight: '100vh', paddingTop: 93, backgroundPosition: 'center', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <CustomCard
                        style={{ paddingTop: 93, minHeight: '100vh', borderRadius: 0 }}
                        effectColor="#rgba(0, 0, 0, 0.9)" // required
                        color="#rgba(0, 0, 0, 0.9)" // default color is white
                        blur={25} // default blur value is 10px

                    >


                        <div className="container movie-detail mb-5" >
                            <div className="row">
                                <div className="col-md-4 d-lg-text-right ">
                                    <img
                                        className="img-fluid"
                                        src={movieDetail.hinhAnh}
                                        alt={movieDetail.biDanh}
                                    />
                                </div>
                                <div className="col-md-4 d-lg-text-left movie-content">
                                    <h3 className="text-warning">{movieDetail.tenPhim}</h3>
                                    <p className="text-white">Ngày chiếu: {moment(movieDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                                    <p className="text-white">{movieDetail.moTa}</p>
                                    <div>
                                        <button type="button" className="btn btn-primary mr-2" data-toggle="modal" data-target="#trailer">Xem Trailer</button>

                                        <Link className="btn btn-danger" to={`/seat-plan/${movieDetail.lichChieu?.maLichChieu}`}>
                                         Đặt vé
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <br />
                        <h2 className="mt-5 text-white">Cụm rạp</h2>
                        <div className="container mb-5 p-4 theater" style={{backgroundColor: '#fff'}}>
                            <div className="row">
                                <div className="col-12 col-md-3">
                                    <div
                                        className="nav flex-column nav-pills text-left"
                                        id="v-pills-tab"
                                        role="tablist"
                                        aria-orientation="vertical"
                                    >
                                        {movieDetail.heThongRapChieu?.map((heThongRap, idx) => {
                                            return (
                                                <a
                                                    className={`nav-link theater-content ${idx === 0 && 'active'}`}
                                                    id="v-pills-home-tab"
                                                    data-toggle="pill"
                                                    href={`#${heThongRap.maHeThongRap}`}
                                                    role="tab"
                                                    aria-controls="v-pills-home"
                                                    aria-selected="true"
                                                >
                                                    <img
                                                        src={heThongRap.logo}
                                                        width="40px"
                                                        className="mr-2"
                                                    />
                                                    {heThongRap.tenHeThongRap}
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                               
                                <div className="col-12 col-md-9 mt-md-0  mt-3 theater-detail">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        {movieDetail.heThongRapChieu?.map((heThongRap, idx) => {
                                            return (
                                                <div
                                                    className={`tab-pane fade show ${idx === 0 && 'active'}`}
                                                    id={heThongRap.maHeThongRap}
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-home-tab"
                                                >
                                                    {heThongRap.cumRapChieu.map(cumRap => {
                                                        return (
                                                            <div className="text-left mb-3 ">
                                                                <img src={cumRap.hinhAnh} alt="" />
                                                                {cumRap.tenCumRap}
                                                                <div className="row mt-3">
                                                                    {cumRap.lichChieuPhim.map(lichChieu => {
                                                                        return (
                                                                            <div className=" col-6 col-sm-2 mb-2">
                                                                                <Link
                                                                                    to={`/seat-plan/${lichChieu.maLichChieu}`}
                                                                                >
                                                                                    <button>
                                                                                   {moment(
                                                                                        lichChieu.ngayChieuGioChieu
                                                                                    ).format('hh:mm A ')}
                                                                                    </button>
                                                                                </Link>
                                                                            </div>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </CustomCard>
                </div>

                <div className="modal fade " id="trailer" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" >
                    <div className="modal-dialog" style={{ display: 'table', maxWidth: 940, width: '100%', height: '100%', margin: ' 0 auto' }} role="document" aria-hidden="true">
                        <div className="modal-content " style={{ verticalAlign: 'middle', display: 'table-cell' }}>
                            <button className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div className="modal-body" >
                                <iframe width={940} height={450} src={`${movieDetail.trailer}?autoplay=1&mute=1`} frameborder="0" allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen tabIndex={-1}></iframe>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}





// }


const mapStateToProps = state => ({
    movieDetail: state.movieDetailReducer.movieDetail,
    loading: state.movieDetailReducer.loading,
})
const mapDispatchToProps = dispatch => ({
    fetchMovieDetail: (movieId) => dispatch(actFetchMovieDetail(movieId))
})
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);







