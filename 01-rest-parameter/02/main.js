// จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่

function filterOutOdds(...evnOdd) {
    let evenArr = [];
    evnOdd.map((item) => {
        if  (item % 2 === 0) {
            evenArr.push(item);
        }
    });
    return evenArr;
}