var express = require("express")

const servidor = express()

const puerto = 80


servidor.get("/", function(request,response){

	response.send("<h1>Hola desde <u>Express</u>!</h1>")
   
})

servidor.listen(puerto)