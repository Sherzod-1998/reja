console.log("Web Serverni boshlash");
const res = require("express/lib/response");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

//Mongo DB connect
const db = require ("./server").db();


app.use(express.static("public")); // Static fayllar uchun papka
app.use(express.json()); // JSON formatidagi ma'lumotlarni o'qish
app.use(express.urlencoded({ extended: true })); // URL encoded ma'lumotlarni o'qish

// 2: Session code (bu yerda session middle  ware bo'lsa qo'shish mumkin)

// 3: Views konfiguratsiyasi
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing
app.post("/creatr-item", (req, res) => {
    //TODO: code with db
});

app.get('/author' , (req, res) =>{
    res.render("author", {user: user});
})

app.get("/", function(req, res){
    res.render("reja");
});

module.exports = app;