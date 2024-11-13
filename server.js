// Web Serverni boshlash
console.log("Web Serverni boshlash");

const express = require("express");
const app = express();
const http = require("http");

// 1: Static va JSON middleware
app.use(express.static("public")); // Static fayllar uchun papka
app.use(express.json()); // JSON formatidagi ma'lumotlarni o'qish
app.use(express.urlencoded({ extended: true })); // URL encoded ma'lumotlarni o'qish

// 2: Session code (bu yerda session middleware bo'lsa qo'shish mumkin)

// 3: Views konfiguratsiyasi
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing
app.post("/creatr-item", (req, res) => {
    console.log(req.body);
    res.json({test:"success"});
});

app.get("/", function(req, res){
    res.render("harid");
});

// Server yaratish va tinglash
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`Server muvaffaqiyatli ishga tushdi. Port: ${PORT}`);
});
