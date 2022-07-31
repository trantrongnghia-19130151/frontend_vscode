import callApi from "utils/callApi";
class DatVeApi extends callApi {
    fecthAllSeatPlanApi(showTimeId) {
        return this.getApi(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showTimeId}`);
    }
    fetchDatVeApi(thongTinDatVe){
        return this.postApi('QuanLyDatVe/DatVe', thongTinDatVe)
    }
}
export const datVeApi = new DatVeApi();