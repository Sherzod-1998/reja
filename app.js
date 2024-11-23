console.log("Web serverni boshlash");
const express = require("express");
const app = express(); /// expresning app objectini yuboradi express serverini yuboradi



// MongoDB connect
const db = require("./server").db();

//1 kirish kodlar
app.use(express.static("public")); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true })); 

//3 views qismi
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routing qismi   
app.post("/create-item", (req,res) => {
   console.log(req.body);
   const reja = req.body.reja;
   db.collection("plans").insertOne({reja: reja}, (err, data) => {
      if(err) {
         console.log(err);
         req.end("Something went wrong");
      } else {
         res.end("Successfully added");
      }
   });
});

app.get("/author", (req,res) => { 
   res.render("author", {user: user });
});

app.get('/', function (req, res) {
   console.log('user entered /');
   db.collection("plans").find().toArray((err, data) => {
      if(err) {
         console.log(err);
         res.end("something went wrong");
      } else {
      console.log(data);
      res.render("reja", {items: data});
      }
   });
}); 

module.exports = app;





















////Ishlayapti
// console.log("Web Serverni boshlash");
// const res = require("express/lib/response");
// const express = require("express");
// const app = express();
// const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//     if (err) {
//         console.log("ERROR:", err);
//     } else {
//         user = JSON.parse(data);
//     }
// });

// //Mongo DB connect
// const { db } = require("./server");


// app.use(express.static("public")); // Static fayllar uchun papka
// app.use(express.json()); // JSON formatidagi ma'lumotlarni o'qish
// app.use(express.urlencoded({ extended: true })); // URL encoded ma'lumotlarni o'qish

// // 2: Session code (bu yerda session middle  ware bo'lsa qo'shish mumkin)

// // 3: Views konfiguratsiyasi
// app.set("views", "views");
// app.set("view engine", "ejs");

// // 4: Routing
// app.post("/create-item", (req, res) => {
//     console.log(req.body);  // Yuborilgan ma'lumotlarni tekshirib ko'ring

//     // req.body.reja o'rniga title va description ni olish
//     const title = req.body.title;  
//     const description = req.body.description;

//     // MongoDB'ga kiritish
//     db.collection("plans").insertOne({ title: title, description: description }, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end("Something went wrong");
//         } else {
//             res.end("Successfully added");
//         }
//     });
// });


// app.get('/', function (req, res) {
//     console.log('user entered /');
//     db.collection("plans").find().toArray((err, data) => {
//         if (err) {
//             console.log(err);
//             res.end("something went wrong");
//         } else {
//             console.log(data);
//             res.render("reja", { items: data });  // items ni rendering qilish
//         }
//     });
// });

// module.exports = app;