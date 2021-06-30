function Validation() {
  this.kiemTraRong = function (input, message, idThongBao) {
    if (!input) {
      getID(idThongBao).innerHTML = message;
      getID(idThongBao).style.color = "red";
      getID(idThongBao).style.display = "inline-block";
      return false;
    }
    return true;
  };
  this.kiemTraDoDaiKyTu = function (input, message, idThongBao, min, max) {
    if (input.length < min || input.length > max) {
      getID(idThongBao).innerHTML = message;
      getID(idThongBao).style.color = "red";
      getID(idThongBao).style.display = "inline-block";
      return false;
    }

    getID(idThongBao).style.display = "none";
    return true;
  };
  this.kiemTraHoTen = function (input, message, idThongBao) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (input.match(letter)) {
      getID(idThongBao).innerHTML = "";
      return true;
    }
    getID(idThongBao).innerHTML = message;
    getID(idThongBao).style.color = "red";
    getID(idThongBao).style.display = "inline-block";
    return false;
  };
  this.kiemTraEmail = function (input, message, idThongBao) {
    var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.match(letter)) {
      getID(idThongBao).innerHTML = "";
      return true;
    }
    getID(idThongBao).innerHTML = message;
    getID(idThongBao).style.color = "red";
    getID(idThongBao).style.display = "inline-block";
    return false;
  };
  this.kiemTraPass = function (input, message, idThongBao) {
    var letter =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (input.match(letter)) {
      getID(idThongBao).innerHTML = "";
      return true;
    }
    getID(idThongBao).innerHTML = message;
    getID(idThongBao).style.color = "red";
    getID(idThongBao).style.display = "inline-block";
    return false;
  };
  // this.kiemTraDate = function (input, message, idThongBao) {
  //   var letter = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
  //   // herere
  //   // input.StingToDate();
  //   if (input.toISOString().match(letter)) {
  //     getID(idThongBao).innerHTML = "";
  //     return true;
  //   }
  //   getID(idThongBao).innerHTML = message;
  //   getID(idThongBao).style.display = "inline-block";

  //   getID(idThongBao).style.color = "red";
  //   return false;
  // };
  this.kiemTraDate = function (input, message, idThongBao) {
    var letter = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    if (input.match(letter)) {
      getID(idThongBao).innerHTML = "";
      return true;
    }
    getID(idThongBao).innerHTML = message;
    getID(idThongBao).style.color = "red";
    getID(idThongBao).style.display = "inline-block";
    return false;
  };
  this.kiemTraLuongCB = function (input, message, idThongBao) {
    if (input >= 1000000 && input <= 20000000) {
      getID(idThongBao).innerHTML = "";
      return true;
    }
    getID(idThongBao).innerHTML = message;
    getID(idThongBao).style.color = "red";
    getID(idThongBao).style.display = "inline-block";
    return false;
  };
  this.kiemTraGioLam = function (input, message, idThongBao) {
    if (input >= 80 && input <= 200) {
      getID(idThongBao).innerHTML = "";
      return true;
    }
    getID(idThongBao).innerHTML = message;
    getID(idThongBao).style.color = "red";
    getID(idThongBao).style.display = "inline-block";
    return false;
  };
  this.kiemTraChucVu = function (input, message, idThongBao) {
    if (input === "Chọn chức vụ") {
      getID(idThongBao).innerHTML = message;
      getID(idThongBao).style.color = "red";
      getID(idThongBao).style.display = "inline-block";
      return false;
    }
    getID(idThongBao).innerHTML = "";
    return true;
  };
  this.xoaThongBao = function (idInput, input, message, idThongBao, min, max) {
    getID(idInput).addEventListener("keyup", function () {
      var input = getID(idInput).value;
      valid.kiemTraDoDaiKyTu(input, message, idThongBao, min, max);
    });
  };
}
