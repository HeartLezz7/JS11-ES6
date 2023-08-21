// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน (ในกรณีที่ Object ในพารามิเตอร์มี key ซ้ำกันให้ยึดค่าพารามิเตอร์ตัวที่มาก่อนเป็นหลัก)

let obj1 ={
    name: 'heart',
    age: '1000'
}
let obj2={
    name: 'ice',
    address: 'Bkk'
}
function mergeObjects(...inputObj) {
    inputObj.reverse();
    return inputObj.reduce((acc,item) => Object.assign(acc,item),{});
}

mergeObjects(obj1,obj2);