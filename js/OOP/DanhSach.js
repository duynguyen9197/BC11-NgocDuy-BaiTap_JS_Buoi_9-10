function DanhSach() {
  this.arrNhanVien = [];
  this.themNV = function (NV) {
    this.arrNhanVien.push(NV);
  };
  this.xoaNV = function (index) {
    this.arrNhanVien.splice(index, 1);
  };
  this.capNhatNV = function (index) {
    // --------show form input : set html
    // --------return value về form:
    //                                +DOM input
    //                                +value = arr[index].key
    //                                +disabled key taiKhoan
    //                                +check valid bằng hàm layThongTin
    //                                +arr[index]= nhanVien
    // -------lưu localoStorage và printTable
    var updateNV = layValue();
    if (!updateNV) {
      return;
    }
    updateNV.tinhTongLuong();
    updateNV.xepLoaiNV();
    this.arrNhanVien[index] = updateNV;
  };
  this.searchNV = function (key) {
    var arrSearch = [];
    for (var i = 0; i < this.arrNhanVien.length; i++) {
      if (this.arrNhanVien[i].xepLoai.toLowerCase().indexOf(key) !== -1) {
        arrSearch.push(this.arrNhanVien[i]);
      }
    }
    return arrSearch;
  };
}
