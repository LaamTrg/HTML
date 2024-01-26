function muaVe() {
    var ve = [];
    while (ve.length < 6) {
        var soNgauNhien = Math.floor(Math.random() * 46);
        if (ve.indexOf(soNgauNhien) === -1) {
            ve.push(soNgauNhien);
        }
    }
    return ve;
}

function nhapVe() {
    var ve = [];
    for (var i = 0; i < 6; i++) {
        var so = parseInt(prompt("Nhập số thứ " + (i + 1) + " (từ 0 đến 45):"));
        while (isNaN(so) || so < 0 || so > 45 || ve.includes(so)) {
            alert("Vui lòng nhập một số hợp lệ và chưa được chọn trước đó.");
            so = parseInt(prompt("Nhập số thứ " + (i + 1) + " (từ 0 đến 45):"));
        }
        ve.push(so);
    }
    return ve;
}

function kiemTraTrungGiai(veNguoiChoi, veMay) {
    var soTrungGiai = 0;
    for (var i = 0; i < veNguoiChoi.length; i++) {
        var so = veNguoiChoi[i];
        if (veMay.indexOf(so) !== -1) {
            soTrungGiai++;
        }
    }
    return soTrungGiai;
}

function choiVietlot() {
    var veNguoiChoi = nhapVe();
    alert("Vé của bạn: " + veNguoiChoi.join(", "));

    var veMay = muaVe();
    alert("Số trúng giải: " + veMay.join(", "));

    var soTrungGiai = kiemTraTrungGiai(veNguoiChoi, veMay);
    alert("Số vé bạn trúng: " + soTrungGiai);

    if (soTrungGiai == 0 || soTrungGiai == 1 || soTrungGiai == 2) {
        alert("Chúc may mắn lần sau.");
    } else if (soTrungGiai == 3) {
        alert("Chúc mừng bạn trúng 100.000 VND");
    } else if (soTrungGiai == 4) {
        alert("Chúc mừng bạn trúng 10.000.000 VND");
    } else if (soTrungGiai == 5) {
        alert("Chúc mừng bạn trúng 100 tỷ VND");
    } else if (soTrungGiai == 6) {
        alert("Chúc mừng bạn trúng 1.000 tỷ VND");
    }
}

choiVietlot();