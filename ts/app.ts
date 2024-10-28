const API_URL = `http://localhost:3000`;
type TThuongHieu = { 
    id:number; 
    ten:string; 
    hinh:string; 
} 
type TSanPhamHot = { 
    id:number;  
    ten:string; 
    hinh:string; 
}
type TChiNhanh = { 
    id:number;  
    ten:string; 
    hinh:string; 
}
type TBalo = { 
    id:number;  
    ten:string; 
    hinh:string;
    gia:number;
}
type TBangGia = { 
    id:number;  
    ten:string; 
    gia:number; 
}
const showlistthuonghieu = async ()=>{
    let arr:TThuongHieu[] = await fetch(API_URL + "/thuong_hieu")
    .then (res => res.json())
    .then (data => data as TThuongHieu[]);
    let str=``;
    arr.forEach ( row => str+= show1thuonghieu(row) )
    return str;
}
const show1thuonghieu = (row:TThuongHieu) => {
    return `<div>
                <img src="${row.hinh}">
                <h4>${row.ten}</h4>
            </div> `;
}

const showlistsanphamhot = async ()=>{
    let arr:TSanPhamHot[] = await fetch(API_URL + "/san_pham_hot")
    .then (res => res.json())
    .then (data => data as TSanPhamHot[]);
    let str=``;
    arr.forEach ( row => str+= show1sanphamhot(row) )
    return str;
}
const show1sanphamhot = (sph:TSanPhamHot) => {
    return `<div>
    <img src="${sph.hinh}">
    <h4>${sph.ten}</h4>
    </div> `;
}

const showlistchinhanh = async ()=>{
    let arr:TChiNhanh[] = await fetch(API_URL + "/chi_nhanh")
    .then (res => res.json())
    .then (data => data as TChiNhanh[]);
    
    
    let str=``;
    arr.forEach ( row => str+= show1chinhanh(row) )
    return str;
}
const show1chinhanh = (cn:TChiNhanh) => {
    return `<div>
    <img src="${cn.hinh}">
    <h4>${cn.ten}</h4>
    </div> `;
}

const showlistbalo = async ()=>{
    let arr:TBalo[] = await fetch(API_URL + "/balo")
    .then (res => res.json())
    .then (data => data as TBalo[]);
    

    let str=``;
    arr.forEach ( row => str+= show1balo(row) )
    return str;  
}
const show1balo = (b:TBalo) => {
    return `<div>
    <img src="${b.hinh}">
    <h4>${b.ten}</h4>
    <p>${Number(b.gia).toLocaleString("vi")} VNĐ</p>
    </div> `;
}

const showbanggia = async ()=>{
    let arr:TBangGia[] = await fetch(API_URL + "/bang_gia")
    .then (res => res.json())
    .then (data => data as TBangGia[]);
    let str=``;

    arr.forEach ( row => str+= show1gia(row) )
    return str;
}
const show1gia = (g:TBangGia) => { 
    return `<div>
     <p>${g.ten}</p>
     <p>${Number(g.gia).toLocaleString("vi")} VNĐ</p>
    </div> `;
}



export { showlistthuonghieu , showlistsanphamhot, showlistchinhanh, showlistbalo }
export { showbanggia}