// import express from "express";
// import controllers from "./controller.js";
const express = require("express")
const controllers = require("./controller.js")


const  app = express()

app.get('/',controllers.homeController)
app.get('/post',controllers.postController)
app.get('/error',controllers.errorController)

app.listen(8080,()=>{
    console.log("server is running on port 8080")
})