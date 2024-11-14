// Web Serverni boshlash
console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

app.use(express.static("public")); // Static fayllar uchun papka
app.use(express.json()); // JSON formatidagi ma'lumotlarni o'qish
app.use(express.urlencoded({ extended: true })); // URL encoded ma'lumotlarni o'qish

// 2: Session code (bu yerda session middleware bo'lsa qo'shish mumkin)

// 3: Views konfiguratsiyasi
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing
app.post("/creatr-item", (req, res) => {
    //TODO: code with db here
});

app.get('/author' , (req, res) =>{
    res.render("author", {user: user});
})

app.get("/", function(req, res){
    res.render("harid");
});


// Server yaratish va tinglash
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`Server muvaffaqiyatli ishga tushdi. Port: ${PORT}`);
});
