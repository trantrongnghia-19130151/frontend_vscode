import React, { Component } from 'react'
import './Footer.scss';
export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small mdb-color pt-lg-4 pt-5 text-light">
                {/* Footer Links */}
                <div className="container-fluid container-lg text-center text-md-left">
                    {/* Footer links */}
                    <div className="row text-center text-md-left">
                        {/* Grid column */}
                        <div className="tixCol col-12 col-sm-6 col-lg-4 mx-auto mt-3">
                            <h6 className="text-uppercase mb-3 d-none d-lg-block">MOON</h6>
                            <ul className="row">
                                <li className="col-6 mb-2 d-none d-lg-block">
                                    <a href>FAQ</a>
                                </li>
                                <li className="col-6 mb-2 pl-lg-0 text-right text-lg-left"><a href>Thỏa thuận sử dụng</a></li>
                                <li className="col-6 mb-2 d-none d-lg-block">
                                    <a href>Brand Guidlines</a>
                                </li>
                                <li className="col-6 mb-2 pl-0 pl-sm-1 text-left"><a href>Chính sách bảo mật</a></li>
                            </ul>
                        </div>
                        {/* Grid column */}
                        {/* <hr class="w-100 clearfix d-md-none"> */}
                        {/* Grid column */}
                        <div className="companyCol col-lg-4 mx-auto mt-3 d-none d-lg-block">
                            <h6 className="text-uppercase mb-3">ĐỐI TÁC</h6>
                            <ul className="row">
                                <li className="col mb-3"><a href><img src="./img/cgv.png" alt /></a></li>
                                <li className="col mb-3"><a href><img src="./img/bhd.png" alt /></a></li>
                                <li className="col mb-3"><a href><img src="./img/galaxycine.png" alt /></a></li>
                                <li className="col mb-3"><a href><img src="./img/cinestar.png" alt /></a></li>
                                <li className="col mb-3"><a href><img src="./img/404b8c4b80d77732e7426cdb7e24be20.png" alt /></a></li>
                                <div className="col-12" />
                                <li className="col mb-3"><a href><img src="./img/megags.png" alt /></a></li>
                                <li className="col mb-3"><a href><img src="./img/bt.jpg" alt /></a></li>
                                <li className="col mb-3"><a href><img src="./img/dongdacinema.png" alt /></a></li>
                                <li className="col mb-3"><a href><img src="./img/TOUCH.png" alt /></a></li>
                                <li className="col mb-3"><a href><img src="./img/cnx.jpg" alt /></a></li>
                                <div className="col-12" />
                                <li className="col mb-3"><a href><img src="./img/STARLIGHT.png" alt /></a></li>
                                <li className="col mb-3"><a href><img src="./img/dcine.png" alt /></a></li>
                                <li className="col mb-3"><a href><img src="./img/zalopay_icon.png" alt /></a></li>
                                <li className="col mb-3"><a href><img src="./img/payoo.jpg" alt /></a></li>
                                <li className="col mb-3"><a href><img src="./img/VCB.png" alt /></a></li>
                                <div className="col-12" />
                                <li className="col mb-3"><a href><img src="./img/AGRIBANK.png" alt /></a></li>
                                <li className="col mb-3"><a href><img src="./img/VIETTINBANK.png" alt /></a></li>
                                <li className="col mb-3"><a href><img src="./img/IVB.png" alt /></a></li>
                                <li className="col mb-3"><a href><img src="./img/123go.png" alt /></a></li>
                                <li className="col mb-3"><a href><img src="./img/laban.png" alt /></a></li>
                            </ul>
                        </div>
                        {/* Grid column */}
                        {/* <hr class="w-100 clearfix d-md-none"> */}
                        {/* Grid column */}
                        <div className="appCol col-lg-2 mx-auto mt-3 d-none d-lg-block text-center">
                            <h6 className="text-left ml-1 mb-3">MOBILE APP</h6>
                            <ul className="row">
                                <li className="col-6"><a href><img src="./img/apple-logo.png" alt /></a></li>
                                <li className="col-6"><a href><img src="./img/android-logo.png" alt /></a></li>
                            </ul>
                        </div>
                        {/* Grid column */}
                        {/* <hr class="w-100 clearfix d-md-none"> */}
                        {/* Grid column */}
                        <div className="socialCol col-12 col-sm-6 col-lg-2 mx-auto mt-3 text-center">
                            <h6 className="text-left ml-1 mb-3 d-none d-lg-block">SOCIAL</h6>
                            <ul className="row">
                                <li className="col-6"><a href><img src="./img/facebook-logo.png" alt /></a></li>
                                <li className="col-6"><a href><img src="./img/zalo-logo.png" alt /></a></li>
                            </ul>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Footer links */}
                    <hr className="hrFooter mt-md-0" />
                    {/* Grid row */}
                    <div className=" row">
                        <div className="footer-detail ml-md-3 col-12 col-md text-center text-lg-left">
                            <div>
                            <h6>Copyright © 2020.All Rights Reserved By Moon</h6>
                            </div> 
                        </div>                    
                    </div> 
                </div>               
            </footer>

        )
    }
}
