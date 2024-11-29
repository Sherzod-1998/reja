console.log("Web serverni boshlash");
const express = require("express");
const app = express(); /// expresning app objectini yuboradi express serverini yuboradi



// MongoDB connect
const db = require("./server").db();
const mongodb = require("mongodb");


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
      console.log("data.ops",data.ops);
      res.json(data.ops[0]);
   });
});

app.post("/delete-item", (req, res) =>{
   const id = req.body.id;
  db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data){
    res.json({state: "success"})});
});

app.post("/edit-item", (req, res) => {
   const data = req.body;
   console.log(data);

   db.collection("plans").findOneAndUpdate(
       { _id: new mongodb.ObjectId(data.id) },
       { $set: { reja: data.new_input } },
       (err, result) => {
           if (err) {
               console.error(err);
               res.status(500).json({ state: "failure", message: "Something went wrong" });
           } else {
               res.json({ state: "success" });
           }
       }
   );
});


app.post("/delete-all", (req, res) => {
   if (req.body.delete_all) {
       db.collection("plans").deleteMany(function () {
         res.json({state: "Hammasi o`chirildi"});
       });
   }
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