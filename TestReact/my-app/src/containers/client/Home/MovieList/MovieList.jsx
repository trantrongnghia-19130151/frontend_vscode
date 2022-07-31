import React, { Component } from 'react'
import { connect } from 'react-redux';
import './MovieList.scss';
import { actFetchAllMovieApi } from '../module/actions';
import { Link } from 'react-router-dom';

class MovieList extends Component {
    componentDidMount() {
        this.props.fetchAllMovie();
    }
    render() {
        const { listMovie, isLoading } = this.props;
        
        if (isLoading) {
            return (
                <div className="loader"></div>
            )
        } else {
            return (
                <div className="detail">
                    <div className="container">
                        <div className="row">
                            {listMovie.map((movie) => (
                                <div className=" col-6 col-md-3 mt-4">
                                    <div className="card">
                                        <div className="card-img">
                                            <img className="card-img-top w-100" src={movie.hinhAnh} alt />
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title text-left"> {movie.tenPhim} </h4>
                                            <p className="card-text text-left"> {movie.moTa} </p>
                                            <Link className="btn btn-success w-100" to={`/movie-detail/${movie.maPhim}`} >
                                                Chi tiết
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div >
                </div>


            )
        }
    }
}

const mapStateToProps = (state) => ({
    listMovie: state.homeReducers.listMovie,
    isLoading: state.homeReducers.isLoading,
})
const mapDispatchToProps = dispatch => ({
    fetchAllMovie: () => dispatch(actFetchAllMovieApi())
})
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);