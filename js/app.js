const API_URL = `http://localhost:3000`;
const showlistthuonghieu = async () => {
    let arr = await fetch(API_URL + "/thuong_hieu")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1thuonghieu(row));
    return str;
};
const show1thuonghieu = (row) => {
    return `<div>
    <img src="${row.hinh}">
    <h4>${row.ten}</h4>
    </div> `;
};
const showlistsanphamhot = async () => {
    let arr = await fetch(API_URL + "/san_pham_hot")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1sanphamhot(row));
    return str;
};
const show1sanphamhot = (sph) => {
    return `<div>
    <img src="${sph.hinh}">
    <h4>${sph.ten}</h4>
    </div> `;
};
const showlistchinhanh = async () => {
    let arr = await fetch(API_URL + "/chi_nhanh")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1chinhanh(row));
    return str;
};
const show1chinhanh = (cn) => {
    return `<div>
    <img src="${cn.hinh}">
    <h4>${cn.ten}</h4>
    </div> `;
};

const showlistbalo = async () => {
    let arr = await fetch(API_URL + "/balo")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1balo(row));
    return str;
};
const show1balo = (b) => {
    return `<div>
    <img src="${b.hinh}">
    <h4>${b.ten}</h4>
    <p>${Number(b.gia).toLocaleString("vi")} VNĐ</p>
    </div> `;
};

const showbanggia = async () => {
    let arr = await fetch(API_URL + "/bang_gia")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1gia(row));
    return str;
};
const show1gia = (g) => {
    return `<div>
     <p>${g.ten}</p>
     <p>${Number(g.gia).toLocaleString("vi")} VNĐ</p>
    </div> `;
};
export { showlistthuonghieu, showlistsanphamhot, showlistchinhanh, showlistbalo };
export { showbanggia };
