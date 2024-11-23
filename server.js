const http = require("http");
const { Module } = require("module");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://colin:X8UYACIH3RirRl6r@cluster0.y5urj.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0&ssl=true";


mongodb.connect(
    connectionString, 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, 
(err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
        // console.log(client);
        module.exports = client
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(`This server successfully  running on port ${PORT}, http://localhost:${PORT}`); 
        });
    }
});




















////Ishlayapti
// const http = require("http");
// const { MongoClient } = require('mongodb');

// const connectionString = "mongodb+srv://colin:X8UYACIH3RirRl6r@cluster0.y5urj.mongodb.net/";
// const dbName = "Reja"; // Bu yerga o'z ma'lumotlar bazangiz nomini kiriting.

// let db;

// // MongoDB ulanishi
// MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//     if (err) {
//         console.log("ERROR on connection MongoDB:", err);
//     } else {
//         console.log("MongoDB muvaffaqiyatli ulandi!");

//         // Ma'lumotlar bazasini oling
//         db = client.db(dbName);

//         // `db`ni eksport qilish
//         module.exports = { db };

//         // Serverni ishga tushirish
//         const app = require("./app");
//         const server = http.createServer(app);

//         const PORT = 3000;
//         server.listen(PORT, () => {
//             console.log(`Server muvaffaqiyatli ishga tushdi. Port: ${PORT},  http://localhost:${PORT}`);
//         });
//     }
// });







// const http = require("http");

// const { MongoClient } = require('mongodb');

// let db;
// const connectionString = "mongodb+srv://colin:X8UYACIH3RirRl6r@cluster0.y5urj.mongodb.net/";


// MongoClient.connect(connectionString, (err, client) =>{
//     if(err) console.log("ERROR on connection MongoDB");
//     else{
//         console.log("MongoDB ulandi");
//         module.exports = client;
//         module.exports.db = () => db;
//         const app = require("./app");
//         const server = http.createServer(app);
//         let PORT = 3000;
//         server.listen(PORT, function () {
//             console.log(`Server muvaffaqiyatli ishga tushdi. Port: ${PORT},  http://localhost:${PORT}`);
//         });
//     }
// });