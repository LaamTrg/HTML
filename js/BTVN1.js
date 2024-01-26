function muaVe() {
    let ve = [];
    while (ve.length < 6) {
        let soNgauNhien = Math.floor(Math.random() * 46);
        if (!ve.includes(soNgauNhien)) {
            ve.push(soNgauNhien);
        }
    }
    return ve;
}

function kiemTraTrungGiai(veNguoiChoi, veMay) {
    let soTrungGiai = 0;
    for (let so of veNguoiChoi) {
        if (veMay.includes(so)) {
            soTrungGiai++;
        }
    }
    return soTrungGiai;
}

function choiVietlot() {
    let veNguoiChoi = muaVe();
    console.log("Vé của bạn: " + veNguoiChoi.join(", "));

    let veMay = muaVe();
    console.log("Bộ số của máy: " + veMay.join(", "));

    let soTrungGiai = kiemTraTrungGiai(veNguoiChoi, veMay);
    console.log("Số trúng giải: " + soTrungGiai);

    switch (soTrungGiai) {
        case 1:
        case 2:
            console.log("Chúc bạn may mắn lần sau! Không trúng giải.");
            break;
        case 3:
            console.log("Chúc mừng! Bạn trúng giải 100.000 VND.");
            break;
        case 4:
            console.log("Xin chúc mừng! Bạn trúng giải 10.000.000 VND.");
            break;
        case 5:
            console.log("Chúc mừng! Bạn trúng Jackpot - 100 tỷ VND!");
            break;
        case 6:
            console.log("Chúc mừng! Bạn là người trúng giải Jackpot lớn nhất!");
            break;
    }
}

choiVietlot();