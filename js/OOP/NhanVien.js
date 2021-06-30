function NhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _password,
  _date,
  _luong,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.password = _password;
  this.date = _date;
  this.luong = _luong;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.xepLoai = "";
  this.tinhTongLuong = function () {
    switch (this.chucVu) {
      case "Sếp":
        this.tongLuong = this.luong * 3;
        break;
      case "Trưởng phòng":
        this.tongLuong = this.luong * 2;
        break;
      case "Nhân viên":
        this.tongLuong = this.luong * 1;
        break;

      default:
        break;
    }
  };
  this.xepLoaiNV = function () {
    if (this.gioLam >= 192) {
      this.xepLoai = " xuất sắc";
    } else if (this.gioLam >= 176 && this.gioLam < 192) {
      this.xepLoai = " giỏi";
    } else if (this.gioLam >= 160 && this.gioLam < 176) {
      this.xepLoai = " khá";
    } else {
      this.xepLoai = " trung bình";
    }
  };
}
