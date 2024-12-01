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
        let PORT = 4000;
        server.listen(PORT, function () {
            console.log(`This server successfully  running on port ${PORT}, http://localhost:${PORT}`); 
        });
    }
});
process.emitWarning = () => {}; // Ogohlantirishlarni bloklaydi