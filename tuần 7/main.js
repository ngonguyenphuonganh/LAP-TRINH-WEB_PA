  let danhSachTaiKhoan = [
    { taiKhoan: "khach1", matKhau: "123456" }
  ];
  let taiKhoanDangNhap = null;
  const oTaiKhoan = document.getElementById("oTaiKhoan");
  const oMatKhau = document.getElementById("oMatKhau");
  const oThongBaoLoi = document.getElementById("thongBaoLoi");
  const oManHinhDangNhap = document.getElementById("manHinhDangNhap");
  const oManHinhCuaHang = document.getElementById("manHinhCuaHang");
  const oTenDangNhap = document.getElementById("tenDangNhap");
  
  //1
  function timTaiKhoan(taiKhoan) {
  for (let i = 0; i < danhSachTaiKhoan.length; i++) {
    if (danhSachTaiKhoan[i].taiKhoan === taiKhoan) {
      return danhSachTaiKhoan[i];
    }
  }
  return null;
}

//2
function dangKy() {
  const taiKhoan = oTaiKhoan.value;
  const matKhau = oMatKhau.value;

  // Kiểm tra nếu người dùng chưa nhập gì
  if (taiKhoan === "" || matKhau === "") {
    oThongBaoLoi.className = "thong-bao loi";
    oThongBaoLoi.textContent = "Vui lòng nhập đầy đủ tài khoản và mật khẩu.";
    return;
  }

  const tkTonTai = timTaiKhoan(taiKhoan);

  if (tkTonTai !== null) {
    oThongBaoLoi.className = "thong-bao loi";
    oThongBaoLoi.textContent = "Tài khoản đã tồn tại, vui lòng chọn tên khác hoặc đăng nhập.";
    return;
  } else {
    danhSachTaiKhoan.push({ taiKhoan: taiKhoan, matKhau: matKhau });
    oThongBaoLoi.className = "thong-bao thanh-cong";
    oThongBaoLoi.textContent = "Đăng ký thành công! Bây giờ hãy đăng nhập.";
  }
}

//3
function dangNhap() {
  const taiKhoan = oTaiKhoan.value;
  const matKhau = oMatKhau.value;
  const tk = timTaiKhoan(taiKhoan);

  if (tk === null || tk.matKhau !== matKhau) {
    oThongBaoLoi.className = "thong-bao loi";
    oThongBaoLoi.textContent = "Sai tài khoản hoặc mật khẩu.";
    return;
  } else {
    taiKhoanDangNhap = taiKhoan;
    oTaiKhoan.value = "";
    oMatKhau.value = "";
    oThongBaoLoi.textContent = "";
    hienThiManHinh();
  }
}

//4
function dangXuat() {
  taiKhoanDangNhap = null;
  hienThiManHinh();
}

//5
function hienThiManHinh() {
  if (taiKhoanDangNhap === null) {
    oManHinhDangNhap.style.display = "block";
    oManHinhCuaHang.style.display = "none";
  } else {
    oManHinhDangNhap.style.display = "none";
    oManHinhCuaHang.style.display = "block";
    oTenDangNhap.textContent = taiKhoanDangNhap;
  }
}

  let danhSachSanPham = [
    { id: "SP001", ten: "Áo thun", gia: 150000 },
    { id: "SP002", ten: "Quần jean", gia: 350000 },
    { id: "SP003", ten: "Giày sneaker", gia: 500000 },
    { id: "SP004", ten: "Mũ lưỡi trai", gia: 80000 },
    { id: "SP005", ten: "Balo", gia: 250000 }
  ];

  let gioHang = [];

  const oBangSanPham = document.getElementById("bangSanPham");
  const oBangGioHang = document.getElementById("bangGioHang");
  const oTongTien = document.getElementById("tongTien");

  function dinhDangTien(soTien) {
    return soTien.toLocaleString("vi-VN") + "đ";
  }

  function timSanPham(id) {

  }

  function hienThiSanPham() {

  }

  function hienThiGioHang() {

  }

  function themVaoGio(id) {

  }

  function xoaKhoiGio(viTri) {

  }

  function thanhToan() {

  }
  hienThiManHinh();
  hienThiSanPham();
  hienThiGioHang();