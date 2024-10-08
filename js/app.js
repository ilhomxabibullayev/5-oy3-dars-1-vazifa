// 1 masala

console.log(sum(2, 3));

function sum(a, b) {

    return a + b;

}

/* Global Execution Context: Dastur boshlanganda, JavaScript global ijroiy kontekst yaratadi. Bu kontekstda barcha global o'zgaruvchilar va funksiyalar e'lon qilinadi.

Function Declaration: function sum(a, b) { return a + b; } qatorini o'qiganda, JavaScript sum funksiyasini global kontekstga joylashtiradi. Bu funksiya hozircha chaqirilmagan, shuning uchun u bajarilmaydi.

Function Call: console.log(sum(2, 3)); qatoriga kelganda, sum funksiyasi chaqiriladi. Bu yangi execution context yaratilishiga olib keladi.

Argumentlar: sum funksiyasi ichida a va b argumentlari 2 va 3 qiymatlari bilan to'ldiriladi.

Function Execution: return a + b; qatori bajariladi. a va b ni qo'shish natijasi (5) hisoblanadi.

Return Value: Funksiya 5 qiymatini qaytaradi.

Log to Console: console.log orqali 5 qiymati konsolga chiqariladi. */

// 2 masala

console.log(multiply(2, 3));

var multiply = function (a, b) {

    return a * b;

}

/* Dastur bajarilishidan oldin JavaScript global ijroiy kontekstini yaratadi. Bu kontekstda global o'zgaruvchilar va funksiyalar joylashadi. Lekin, multiply funksiyasi var bilan e'lon qilingan, shuning uchun dastlab u undefined bo'ladi.

console.log(multiply(2, 3)); qatoriga kelganda, multiply funksiyasi chaqiriladi. Ammo, multiply hali bajarilmagan va undefined qiymatiga ega.

Shuning uchun, multiply(2, 3) chaqiruvi bajarilganda, JavaScript TypeError xatosini beradi, chunki multiply undefined va siz undefined ustida funktsiya chaqirganingiz uchun bu mumkin emas */

// 3 masala

let x = 5;

if (x = 10) {

    console.log("This will run!");

}

/* Dastur bajarilishi boshlanganda, JavaScript global ijroiy kontekstini yaratadi. Bu kontekstda x o'zgaruvchisi let yordamida e'lon qilinadi va 5 qiymatini oladi.

if (x = 10) qatoriga kelganda, bu yerda = belgisidan foydalanilgan. Bu x o'zgaruvchisini 10 ga tenglashtirishni anglatadi, shuning uchun if shartini baholashda x ga 10 qiymati beriladi. Bu esa if shartini to'g'ri qilib o'zgartiradi.

if shartining natijasi to'g'ri bo'lgani uchun, konsolga "This will run!" xabari chiqariladi. */

// 4 masala

let invalid = "hello" - 1; console.log(invalid);