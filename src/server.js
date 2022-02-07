const express = require("express")
const app = express()

const port = process.env.PORT || 3000

app.get("/", function (req, res){
    res.render("index")
})

app.listen(port, () => {
    console.info("Aplicação rodando em https://localhost:3000")
})