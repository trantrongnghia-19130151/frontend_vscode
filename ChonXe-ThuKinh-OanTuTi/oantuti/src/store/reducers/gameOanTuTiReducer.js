import * as gameOanTuTiConstants from '../constants/gameOanTuTiConstants'
const initialState = {
    mangDatCuoc: [
        {ma: 'keo', hinhAnh: './images/keo.png', datCuoc:true},
        {ma: 'bua', hinhAnh: './images/bua.png', datCuoc:false},
        {ma: 'bao', hinhAnh: './images/bao.png', datCuoc:false}
    ],
    soBanThang:0,
    soBanChoi: 0,
    ketQua: 'Let`s go',
    playerComputer:
    {ma: 'keo', hinhAnh: './images/keo.png'},
    // {ma: 'bua', hinhAnh: './images/bua.png', datCuoc:false},
    // {ma: 'bao', hinhAnh: './images/bao.png', datCuoc:false}
    
}
const gameOanTuTiReducer = (state = initialState ,{type, payload}) => {
   
    switch (type) {
        case gameOanTuTiConstants.CHON_KEO_BUA_BAO:{
            let mangDatCuocUpdate = [...state.mangDatCuoc];
            mangDatCuocUpdate = mangDatCuocUpdate.map((item, idx)=>{
                return{ ...item,datCuoc:false}
            })
            state.mangDatCuoc.ma = payload;
            let datCuocFind = mangDatCuocUpdate.find(item => item.ma === payload);
             datCuocFind.datCuoc = true;
            
            state.mangDatCuoc = mangDatCuocUpdate;
            return{...state}
        }
        case gameOanTuTiConstants.PLAY_GAME:{
            
            let soNgauNhien = Math.floor(Math.random() * 3);
            let itemNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.playerComputer = itemNgauNhien;
            return{...state}
        }
        case gameOanTuTiConstants.KET_QUA:
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let playerComputer = state.playerComputer;
            state.soBanChoi += 1;
            switch (player.ma) {
               
                case 'keo':
                    if(playerComputer.ma === 'keo'){
                        state.ketQua = 'Thắng sao được keke!';
                    }else if(playerComputer.ma === 'bua'){
                        state.ketQua = 'Bạn đã thua'
                    }else{
                        state.soBanThang +=1;
                        state.ketQua = 'Ok, bạn đã thắng:))'
                    }
                    
                    break;
                case 'bua':
                    if(playerComputer.ma === 'keo'){
                        state.soBanThang += 1;
                        state.ketQua = 'Ok, bạn đã thắng:))'
                    }else if(playerComputer.ma == 'bua'){
                        state.ketQua = 'Thắng sao được keke!'
                    }else {
                        state.ketQua = 'Bạn đã thua'
                    }
                    break;
                case 'bao':
                    if(playerComputer.ma === 'keo'){
                        state.ketQua = 'Bạn đã thua'
                    }else if(playerComputer.ma === 'bua'){
                        state.ketQua = 'Ok, bạn đã thắng'
                        state.soBanThang += 1;
                    }else{
                        state.ketQua = 'Thắng sao được keke!'
                    }
                    break;
            
                default:
                    return{...state}
            }
            
        
        default:
            return {...state};
    }
}

export default gameOanTuTiReducer;