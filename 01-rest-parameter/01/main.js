// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด

function mlutiNum(...num) {
    return num.map((acc,item) => acc*item , 1);
}

console.log(mlutiNum(2,3,10));