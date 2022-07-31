import axios from 'axios';
import { BASE_URL, ACCESS_TOKEN } from 'settings/apiConfig';

class callApi {
  getApi = (endpoint) => {
    return axios({
      url: `${BASE_URL}/${endpoint}`,
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + ACCESS_TOKEN

      }
    });
  }
  postApi = (endpoint, data = null) => {
    return axios({
      url: `${BASE_URL}/${endpoint}`,
      method: 'POST',
      data,
      headers: {
        'Authorization': 'Bearer ' + ACCESS_TOKEN

      }
    })
  }
}
export default callApi;
// export default postApi;