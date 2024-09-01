const express = require('express');
const path = require('path');
const http = require('http');
const socket = require("socket.io");
const exp = require('constants');
const app = express();

const server = http.createServer(app);
const io = socket(server);

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

io.on("connection" , function(socket){
    console.log("connected");
})
app.get("/",(req,res)=>{
    res.render("index");
})

server.listen(3000, ()=>{
    console.log(`Server is listening on port 3000`)
})