const express = require("express");
const bodyParser = require("body-parser");
const json = require("jsonwebtoken");
const app = express();
const port = 2000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "yes"
    });})

var auth=(req,res,next)=>{
    if(req.headers.token){
     next();
    }
    else{
        return res.status(200).json({
            message: "not--loged---------in"
           })}}

app.post("/login",(req, res) => {
    let store = req.body;
    let name = store.name;
    let email = store.email;
    if (name === "sheraz" && email === "abc@gmail.com") {
        var token=json.sign({email:email},'shhhhh')
        return res.status(200).json({
            message: "loged----in",
            token})}
    else {
        return res.status(404).json({
            message: "invalid"
        })}
})


app.get("/user",auth,(req,res)=>{
return res.status(200).json({
User:[{
name:"sheraz",
age:24,
gender:"male",
},{
    name:"sheraz",
    age:24,
    gender:"male",
    }]
})})
app.listen(port, () => {
    console.log("working--------------");
})
