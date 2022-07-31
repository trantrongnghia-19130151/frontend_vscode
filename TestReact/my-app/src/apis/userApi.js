import callApi from "utils/callApi";

class UserApi extends callApi{
    fetchInfoUserLogin = () => {
        return this.postApi('QuanLyNguoiDung/ThongTinTaiKhoan')
    }
}
export const userApi = new UserApi();