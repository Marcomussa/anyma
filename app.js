const express = require("express")
const app = express()
const path = require("path")

app.set("view engine", "ejs")

app.set("views", __dirname + "/views")

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/acerca", (req, res) => {
    res.render("about")
})

app.get("/contacto", (req, res) => {
    res.render("contact")
})

app.get("/blog", (req, res) => {
    res.render("blog")
})

app.get("/servicios", (req, res) => {
    res.render("expertise")
})

app.get("/marketing", (req, res) => {
    res.render("digital-marketing")
})

app.get("/desarrollo", (req, res) => {
    res.render("web-development")
})

app.get("/soluciones", (req, res) => {
    res.render("solutions")
})

app.listen(3000, () => {
    console.log("Server Started")
})