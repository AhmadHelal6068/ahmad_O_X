let count = parseInt(localStorage.getItem("count")) || 0;
let add = document.querySelector(".add");
let number = document.querySelector(".number");
let remove = document.querySelector(".remove");
let result = document.querySelector(".result");



localStorage.setItem("count", count);
number.textContent = count;

add.addEventListener("click", () => {
    count += 1;
    number.textContent = count;
    localStorage.setItem("count", count);
})
remove.addEventListener("click", () => {
    count -= 1;
    number.textContent = count;
    localStorage.setItem("count", count);
});
result.addEventListener("click", () => {
    count = 0;
    number.textContent = count;
    localStorage.setItem("count", count);
});

// *---- يستخدم فقط في الجلسة الحالية وعندما يغلق المتصفح سيتم مسح البيانات على الفور
// *---- يخزن 5 ميغا بيت
// *---- لا يشارك في اتصال الخادم فقط للعميل
// *---- واجهة المصدر مقبولة ويمكن اعادة تغليفها لدعم اوبجكت و اريبشكل افضل

