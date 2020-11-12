
const express = require("express");
const bodyparser = require("body-parser");


const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var items =["HomeWork","onlineClass"];

app.get("/", function(req, res){

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-us", options);
    res.render("lists", {kindofday: day,newItemlists: items});
    
});


app.post("/", function(req,res){
    var item = req.body.input
    items.push(item);
res.redirect("/");    
});


app.listen(3000, function(){
    console.log("Port is running at 3000");
})


