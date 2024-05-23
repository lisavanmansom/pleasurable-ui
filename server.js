// 1. OPZETTEN VAN DE WEBSERVER

import express, { request } from "express"

import fetchJson from "./helpers/fetch-json.js"

let app = express()

app.set("view engine", "ejs")

app.set("views", "./views")

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))

// 2. ROUTES

app.get("/", function (request, response) {
    response.render("homepage", {})
  })
  
// 3. START DE WEBSERVER

app.set("port", process.env.PORT || 8000)
app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`)
})
