import React, { Component } from 'react'
import './Info.scss'
import { Tabs } from 'antd';
import { actFetchInFoUserLogin } from './module/actions';
import moment from 'moment';
import { connect } from 'react-redux'


const { TabPane } = Tabs;

class Info extends Component {
    componentDidMount() {

        this.props.fetchInfoUser();
    }
    render() {
        const { infoUserLogin } = this.props;
        console.log(infoUserLogin);
        return (

            <div className="info" >
                <div className="container" style={{ paddingTop: 150 }}>
                    <div className="main-body">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card-info">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img src="./img/ava.jpg" alt="anvatar" />
                                            <div className="mt-3 ">
                                                <h4 className="text-white">{infoUserLogin.hoTen}</h4>
                                            </div>
                                        </div>
                                        <hr className="my-4" />
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <h6 className="mb-0 text-white">Tên đăng nhập</h6>
                                                <span> {infoUserLogin.taiKhoan} </span>
                                            </li>
                                            <li className="list-group-item">
                                                <h6 className="mb-0 text-white">Gmail</h6>
                                                <span> {infoUserLogin.email} </span>
                                            </li>
                                            <li className="list-group-item ">
                                                <h6 className="mb-0 text-white">SDT</h6>
                                                <span> {infoUserLogin.soDT} </span>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card">
                                    <Tabs defaultActiveKey="1" centered>

                                        <TabPane tab="Lịch sử đặt vé" key="1">
                                            
                                                <table className="table">
                                                    <thead className="thead-dark">
                                                        <tr>
                                                            <th scope="col">Mã Vé</th>
                                                            <th scope="col">Tên phim</th>
                                                            <th scope="col">Rạp</th>
                                                            <th scope="col">Số ghế</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {infoUserLogin.thongTinDatVe?.map((info, idx) => {
                                                            return (
                                                                <tr key={idx}>
                                                                    <th className=" text-white" scope="row">{info.maVe}</th>
                                                                    <td className=" text-white">{info.tenPhim}</td>
                                                                    <td className=" text-white">{moment(info.ngayDat).format('L')} - {moment(info.ngayDat).format('LT')}</td>
                                                                
                                                                    <td className="flex text-white">{info?.danhSachGhe.map((ghe, idx) => {
                                                                        return <span key={idx}>{ghe.tenGhe + ","}</span>
                                                                    })}</td>
                                                                    
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            
                                        </TabPane>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => ({
    infoUserLogin: state.QuanLyUserReducer.infoUserLogin
})
const mapDispatchToProps = dispatch => ({

    fetchInfoUser: () => dispatch(actFetchInFoUserLogin())

})
export default connect(mapStateToProps, mapDispatchToProps)(Info);