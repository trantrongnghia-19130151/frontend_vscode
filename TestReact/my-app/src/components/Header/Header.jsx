import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

export default class Header extends Component {
  state = {
    hoTen: "TranNghia"
  }
  render() {
    return (


      <div className="navbar-expand-md navbar-light">
        {/* <div id="navbarCollapse">
          <div id="sideNav" className="sidenav">
            <button onclick="closeSideNav()"><i className="fa fa-chevron-right" /></button>
            <a href="#" className="nav-item nav-link user-action signIn"><img src="./img/avatar.png" className="avatar" alt="Avatar" /> Đăng Nhập</a>
            <a href="#Film" className="nav-item nav-link user-action"> Lịch Chiếu</a>
            <a href="#" className="nav-item nav-link user-action"> Cụm rạp</a>
            <a href="#" className="nav-item nav-link user-action"> Tin Tức</a>
            <a href="#" className="nav-item nav-link user-action"> Ứng dụng</a>
            <div className="nav-item">
              <a href="#" type="button" data-toggle="modal" data-target="#navModal" data-keyboard="true" className="nav-link user-action">Hồ Chí Minh</a>
            </div>
          </div>
        </div> */}
        <div className="navbar">
          <Link to="/" className="navbar-brand d-flex">
            <img src="./img/logo.png" />
            <h3 className="ml-2">MOON</h3>
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse  " id="collapsibleNavId">
            <ul className="navbar-nav  ml-auto mt-2 mt-md-0">
              <li className="nav-item d-md-none d-block">
                <Link className="nav-link user-action " to="/logIn">
                  <img src="./img/ava.jpg" className="avatar" alt="Avatar" />
                  Đăng nhập

                </Link>
              </li>
              <li className="nav-item pl-1">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item pl-1">
                <Link className="nav-link" to="/theater">
                  Theater
                </Link>
              </li>
              <li className="nav-item pl-1">
                <Link className="nav-link" to="/review">
                  Review
                </Link>
              </li>
              <li className="nav-item pl-1">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

            </ul>
          </div>

          <div className="navbar-nav d-none d-md-block ml-auto">
            <div className="nav-item">
              {/* <Link to="/login"> */}
              <div className="items-center d-flex">
                <img src="./img/ava.jpg" alt="anvatar" width="45px" height="45px"  />
                <div className="dropdown">
                  <span className=" dropdown-toggle bg-transparent border-transparent mt-5" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.state.hoTen}
                  </span>
                  <div className="dropdown-menu " aria-labelledby="dropdownMenuLink" >
                    <Link className="dropdown-item " to="/info">Profile</Link>
                    <Link className="dropdown-item " to="/" >Log out</Link>
                  </div>
                </div>
              </div>
              {/* : <div className="items-center flex-shrink-0 lg:flex" onClick={() => {
                    history.push('/login') */}

              {/* <i className="fa fa-user-circle text-5xl text-gray-500 hover:text-white cursor-pointer"></i>
                    <button className="self-center text-center py-2 px-4 text-white">Sign in</button> */}
            </div>
            {/* </Link> */}
          </div>
        </div>
        </div>










        );
  }
}
