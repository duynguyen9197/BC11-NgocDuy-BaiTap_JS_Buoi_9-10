/**
 *Tạo class Nhân viên 
 Tạo class Danh Sách NV
 * PROGRAMMING
 *  1.In table
 *  -Dom nút thêm nhân viên
 *  -lấy value từ modal =>Hàm
 *  -funtion themNhanVien
 *   -Hàm InTable
 * 2.Valid
 *     -Sử dụng kỹ thuât flag
 *     -tạo biến isValid boolean
 *     -tạo hàm kiem tra rong return boolean gán cho isValid
 *     -kiểm tra rỗng: 
 *  if input true thì return true và ngược lại
 *     -kiem tra do dai ký tự
 *  if nhanVien.taiKhoan.length >min && <max return true
 *     -kiem tra dinh dang
 *  if nhanVien.att.match()
 *     -kiem tra selected
 *  if nhanVien.att === default return false 
 *  */

var valid = new Validation();
var danhSach = new DanhSach();
getLocalStorage();
function getID(id) {
  return document.getElementById(id);
}
// feature Thêm Nhân Viên
getID("btnThemNV").onclick = function (event) {
  event.preventDefault();
  var nhanVien = layValue();
  if (nhanVien) {
    danhSach.themNV(nhanVien);
    console.log(nhanVien);
    nhanVien.xepLoaiNV();
    nhanVien.tinhTongLuong();
    printTable(danhSach.arrNhanVien);
    setLocalStorage();
  }
};

// Hàm lấy value từ user
function layValue() {
  var _taiKhoan = getID("tknv").value;
  var _hoTen = getID("name").value;
  var _email = getID("email").value;
  var _password = getID("password").value;
  var _date = getID("datepicker").value;
  var _luong = getID("luongCB").value * 1;
  var _chucVu = getID("chucvu").value;
  var _gioLam = getID("gioLam").value * 1;
  // console.log(_date);
  //    Flag check validation
  var isValid = true;
  // ---------check tài khoản
  isValid &=
    valid.kiemTraRong(_taiKhoan, "Không được để trống ô này", "tbTKNV") &&
    valid.kiemTraDoDaiKyTu(
      _taiKhoan,
      "Nhập tối đa 4 - 6 ký số",
      "tbTKNV",
      4,
      6
    );

  // ---------check họ tên
  isValid &=
    valid.kiemTraRong(_hoTen, "Không được để trống ô này", "tbTen") &&
    valid.kiemTraHoTen(_hoTen, "Sai Định Dạng", "tbTen");
  // ---------check email
  isValid &=
    valid.kiemTraRong(_email, "Không được để trống ô này", "tbEmail") &&
    valid.kiemTraEmail(_email, "Sai Định Dạng", "tbEmail");
  // ---------check pass
  isValid &=
    valid.kiemTraRong(_password, "Không được để trống ô này", "tbMatKhau") &&
    valid.kiemTraPass(_password, "Sai Định Dạng", "tbMatKhau") &&
    valid.kiemTraDoDaiKyTu(_password, "Nhập từ 6-10 ký tự", "tbMatKhau", 6, 10);
  // ---------check date
  isValid &= valid.kiemTraRong(_date, "Không được để trống ô này", "tbNgay");
  // ---------check lương
  isValid &=
    valid.kiemTraRong(_luong, "Không được để trống ô này", "tbLuongCB") &&
    valid.kiemTraLuongCB(
      _luong,
      "Nhập từ  1 000 000 - 20 000 000",
      "tbLuongCB"
    );
  // ---------check giờ làm
  isValid &=
    valid.kiemTraRong(_gioLam, "Không được để trống ô này", "tbGiolam") &&
    valid.kiemTraGioLam(_gioLam, "Nhập từ  80- 200", "tbGiolam");
  // ---------------check Chức Vụ
  isValid &= valid.kiemTraChucVu(_chucVu, "Chọn chức vụ", "tbChucVu");
  //  ===== feature Xóa thông báo input ======
  valid.xoaThongBao(
    "tknv",
    _taiKhoan,
    "Nhập tối đa 4 - 6 ký số",
    "tbTKNV",
    4,
    6
  );

  if (!isValid) {
    return;
  }
  //   khỏi tạo đối tượng nhanVien từ clas Nhân Vien
  var nhanVien = new NhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _password,
    _date,
    _luong,
    _chucVu,
    _gioLam
  );
  return nhanVien;
}
// Hàm printTable
function printTable(arr) {
  var contentTable = "";
  for (var i = 0; i < arr.length; i++) {
    contentTable += `
        <tr>
        <td>${arr[i].taiKhoan}</td>
        <td>${arr[i].hoTen}</td>
        <td>${arr[i].email}</td>
        <td>${arr[i].date}</td>
        <td>${arr[i].chucVu}</td>
        <td>${arr[i].tongLuong} VND </td>
        <td>${arr[i].xepLoai}</td>
        <td><button class="btn btn-danger " onclick="xoaNV('${i}')" >Xóa nhân viên</button>
        <button class="btn btn-info"
        onclick="getValueNV('${i}')"
        data-toggle="modal"
        data-target="#myModal"
        
        >Cập nhật</button></td>
        
        </tr>
        `;
  }
  getID("tableDanhSach").innerHTML = contentTable;
}
// FEATURE : Xóa Nhân viên
function xoaNV(indexNV) {
  //--------goi medthod xóa nhân viên trong DanhSach
  // -------lưu localoStorage và printTable
  danhSach.xoaNV(indexNV);
  setLocalStorage();
  printTable(danhSach.arrNhanVien);
}

// feature Cập nhật
getID("btnThem").onclick = function () {
  getID("tknv").disabled = false;
  getID("btnCapNhat").style.display = "none";
  getID("btnThemNV").style.display = "block";
};
function getValueNV(index) {
  // --------show form input : set html
  // --------return value về form:
  //                                +DOM input
  //                                +value = arr[index].key
  //                                +disabled key taiKhoan
  //                                +reset disabled

  //                                +check valid bằng hàm layThongTin
  //                                +arr[index]= nhanVien
  // -------lưu localoStorage và printTable
  getID("tknv").value = danhSach.arrNhanVien[index].taiKhoan;
  getID("tknv").disabled = true;
  getID("name").value = danhSach.arrNhanVien[index].hoTen;
  getID("email").value = danhSach.arrNhanVien[index].email;
  getID("password").value = danhSach.arrNhanVien[index].password;
  getID("datepicker").value = danhSach.arrNhanVien[index].date;
  getID("luongCB").value = danhSach.arrNhanVien[index].luong;
  getID("chucvu").value = danhSach.arrNhanVien[index].chucVu;
  getID("gioLam").value = danhSach.arrNhanVien[index].gioLam;
  getID("btnThemNV").style.display = "none";
  getID("btnCapNhat").style.display = "block";
  getID("btnCapNhat").onclick = function () {
    danhSach.capNhatNV(index);
    setLocalStorage();
    printTable(danhSach.arrNhanVien);
  };
}
// FEATURE TÌM NHÂN VIÊN
/**
 * 1.Dom
 * 2.function
 *  -for
 *  -if(keyword === arr.xepLoai )
 *  -arrSearch = arr[i]
 * 3.print(arrSearch)
 */
getID("searchName").addEventListener("keyup", function () {
  var keyword = getID("searchName").value;
  var arrSearch = danhSach.searchNV(keyword);
  printTable(arrSearch);
});
// lưu localStorage
function setLocalStorage() {
  var arrString = JSON.stringify(danhSach.arrNhanVien);
  localStorage.setItem("DSNV", arrString);
}
function getLocalStorage() {
  if (JSON.parse(localStorage.getItem("DSNV"))) {
    danhSach.arrNhanVien = JSON.parse(localStorage.getItem("DSNV"));
    printTable(danhSach.arrNhanVien);
  }
}
