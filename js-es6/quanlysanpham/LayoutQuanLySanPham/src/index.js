import ProductService from "./services/ProductService";
import Product from "./models/Product";

const getEle = id => document.getElementById(id);


const renderContent = () => {
    const content = `
    <div class="card text-white bg-dark">
      <div class="card-body">
        <h4 class="card-title">Danh sách sản phẩm</h4>
        <div class='container'>
          <div class="row">
            <div class="col-md-3">
              <input id="maSP" class="form-control" placeholder="Mã SP" disabled />
            </div>
            <div class="col-md-3">
              <input id="tenSP" class="form-control" placeholder="Tên SP" />
            </div>
            <div class="col-md-3">
              <input id="gia" class="form-control" placeholder="Giá" />
            </div>
            <div class="col-md-3">
              <input id="hinhAnh" class="form-control" placeholder="Link hình" />
            </div>
          </div>
          <br />
          <button id="btnThem" class="btn btn-success">Thêm sản phẩm</button>
          <button id="btnCapNhat" class="btn btn-success">Cap nhat</button>
        </div>
      </div>
    </div>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Mã SP</th>
            <th>Tên SP</th>
            <th>Giá </th>
            <th>Hình ảnh</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="tblDanhSachSanPham">

        </tbody>
      </table>
    </div>
    `;
    getEle('root').innerHTML = content;
};
renderContent();
const renderProducts = async () => {
    try{
        const {data} = await ProductService.fetchProducts();
        const content = data.map((product) => {
            const {id, tenSP, gia, hinhAnh
            } = product;
            return` 
                <tr>
                    <td>${id}</td> 
                    <td>${tenSP}</td>
                    <td>${gia}</td>
                    <td>
                        <img src="${hinhAnh}" width="50px" height="50px">

                    </td>
                    <td>
                        <button class="btn btn-info">Sửa</button>
                        <button class="btn btn-danger">Xóa</button>

                    </td>

                </tr>
            `;
           
        });
        getEle('tblDanhSachSanPham').innerHTML = content.join('');
    }catch (error){
    console.error();
    }
};
renderProducts();
