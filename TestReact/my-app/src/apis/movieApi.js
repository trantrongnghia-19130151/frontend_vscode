import { GROUP_ID } from "settings/apiConfig";
import callApi from "utils/callApi";

class MovieApi extends callApi {
    fecthAllMovieApi() {
        return this.getApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
    }

    fetchMovieDetailApi(movieId) {
        return this.getApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
    }
}

export const movieApi = new MovieApi();