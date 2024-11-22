const http = require("http");

const { MongoClient } = require('mongodb');

let db;
const connectionString = 
"mongodb+srv://colin:X8UYACIH3RirRl6r@cluster0.y5urj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


MongoClient.connect(connectionString, (err, client) =>{
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MongoDB ulandi");
        module.exports = client;
        module.exports.db = () => db;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(`Server muvaffaqiyatli ishga tushdi. Port: ${PORT},  http://localhost:${PORT}`);
        });
    }
});

