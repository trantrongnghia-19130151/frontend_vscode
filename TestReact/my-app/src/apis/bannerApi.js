
import callApi from "utils/callApi";

class BannerApi extends callApi {
    fecthAllBannerApi(){
        return this.getApi('QuanLyPhim/LayDanhSachBanner')
    }
}
export const bannerApi = new BannerApi();