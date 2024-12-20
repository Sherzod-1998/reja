/*
TASK G:

Yagona parametrga ega function tuzing.
Va bu function parametr orqalik integer ma'lumot turlariga ega 
bo'lgan bir arrayni qabul qilsin.
Ushbu function bizga arrayning tarkibidagi birinchi eng katta 
qiymatning indeksini qaytarsin.

MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
Va bu 21 soni arrayning tarkibidagi birinchi eng katta son 
hisobladi va bizga uning indeksi 1 qaytadi.
*/

function getHighestIndex (array) {
    let son = array.reduce((acc, curr) => (curr > acc ? curr : acc));
    let index = array.indexOf(son);
    return index;
}
console.log(getHighestIndex([5, 21, 12, 21 ,8]));






































/*
TASK F

Yagona string argumentga ega findDoublers nomli function tuzing
Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
true yokida false natija qaytarsin.

MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki 
marotaba takrorlangan 'll' harfi mavjud!

 */
// function findDoublers (string) {
//     let string2 = string.toLowerCase().split("");
//     javob = string2.filter((ele,index,arr) => {
//         return arr.indexOf(ele) !== index;
//     });
//     return javob.length !=0;
// }

// console.log(findDoublers("b"));




// E-TASK: 

// Shunday function tuzing, u bitta string argumentni qabul qilib o'sha stringni teskari qilib return qilsin.

// MASALAN: getReverse("hello") return qilsin "olleh"

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("hello"));


// D-TASK: 

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function tekshir(a, b) {
//     let aa = a.toLowerCase().split('').sort().join('');
//     let bb = b.toLowerCase().split('').sort().join('');
//     return aa === bb;
// };

// console.log(tekshir("mitgroup", "gmtiprou"));
























// C-TASK;
/**
 Shunday class tuzing tuzing nomi Shop, va uni constructoriga 
 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin,
  biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan
   vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

 */

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.products = {
//       non: non,       
//       lagmon: lagmon, 
//       cola: cola
//     };
//   }

//   qoldiq() {
//     const now = new Date();
//     const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
//     return `Hozir ${time}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`;
//   }

//   sotish(productName, quantity) {
//     this.products[productName] -= quantity;
//     const now = new Date();
//     const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

//     return `Hozir ${time}da ${quantity}ta ${productName} sotildi. Qoldiq: ${this.products[productName]}ta.`;
//   }

//   qabul(productName, quantity) {
//     this.products[productName] += quantity;
//     const now = new Date();
//     const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

//     return `Hozir ${time}da ${quantity}ta ${productName} qabul qilindi. Qoldiq: ${this.products[productName]}ta.`;
//   }
// }

// const shop = new Shop(4, 5, 2);
// console.log(shop.qoldiq()); 

// console.log(shop.sotish('non', 3));

// console.log(shop.qabul('cola', 4));

// console.log(shop.qoldiq());












// B-TASK:
/*
Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha 
stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
 */

//Define
// function countDigits(str) {
//     let arr = str.split("");
//     const raqam = arr.filter((ele) => {
//         return ele == 0 || 
//         ele == 1 || 
//         ele == 2 || 
//         ele == 3 || 
//         ele == 4 || 
//         ele == 5 || 
//         ele == 6 || 
//         ele == 7 || 
//         ele == 8 || 
//         ele == 9;
//       });
//     console.log("Raqam",raqam.length);

// };

// //Call
// countDigits("ad2a54y79wet0sfgb9");





// A-TASK:

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni 
// ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// function harfSana(letter, word) {
//     let count = 0;
//     word.split("").forEach(ele => {
//         if (ele === letter) {
//             count+=1;
//         }
//     });
//     return count;
// }
// console.log(harfSana("e", "engineer")); 


// console.log("Jack Ma maslahatlari");
// const list = [
//   "Yaxshi talaba bo'ling", // 0-20
//   "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//   "O'zingizga ishlashni boshlang", // 30-40
//   "Siz kuchli bo'lgan narsalarni qiling", // 40-50
//   "Yoshlarga investitsiya qiling", // 50-60
//   "Endi dam oling, foydasi yo'q endi" // 60+
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Insert a number" , null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function(){
//         callback(null, list[5]);
//     },5000)
//   }
// }

// console.log("Passed here 0");
// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else{
//     console.log("Javob:", data);
//   }
// });
// console.log("Passed here 1");

//asynchronous

// console.log("Jack Ma maslahatlari");
// const list = [
//   "Yaxshi talaba bo'ling", // 0-20
//   "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//   "O'zingizga ishlashni boshlang", // 30-40
//   "Siz kuchli bo'lgan narsalarni qiling", // 40-50
//   "Yoshlarga investitsiya qiling", // 50-60
//   "Endi dam oling, foydasi yo'q endi" // 60+
// ];

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("Insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve(list[5]);
//         },5000);
//     });
//     // return list[5];
//     // setTimeout(function(){
//     //     return list[5];
//     // },5000);
//   }
// }
// //then catch

// // maslahatBering(25)
// //     .then((data) => {
// //         console.log("javob:", data);
// //     })
// //     .catch((err) => {
// //         console.log("ERROR:", err);
// //     });

// // console.log("passed here 1");

// //asyn / await
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();