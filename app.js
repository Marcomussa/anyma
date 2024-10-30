const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require("body-parser")

app.set("view engine", "ejs")

app.set("views", __dirname + "/views")

app.use(express.static(__dirname + '/public'))

function isValidEmail(email) {
    return true
}

app.post("/validar", (req, res) => {
    const errors = {}
    let { nombre, correo, mensaje } = req.body

    if (!nombre) {
        errors.nombre = 'El nombre es requerido'
    }

    if (!correo) {
        errors.correo = 'El correo electrónico es requerido'
    } else if (!isValidEmail(correo)) {
        errors.correo = 'El correo electrónico no es válido'
    }

    if (!mensaje) {
        errors.mensaje = 'El mensaje es requerido'
    }

    if (Object.keys(errors).length > 0) {
        return res.render('contacto', { errors })
    }

    res.redirect("/contacto")
})

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

// app.get("/marketing", (req, res) => {
//     res.render("digital-marketing")
// })

app.get("/desarrollo", (req, res) => {
    res.render("web-development")
})

app.get("/soluciones", (req, res) => {
    res.render("solutions")
})

app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(3000, () => {
    console.log("Server Started")
})