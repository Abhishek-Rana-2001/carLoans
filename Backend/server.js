const express = require("express")
const app = express()
const cors = require("cors")
const port  = process.env.PORT || 5000
const leadRouter = require("./routes/leadRoutes")
const bodyParser = require('body-parser');
const db = require("./db/db")

const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-type", "Authorization"]
}

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.json({status: "ok"})
})

app.use("/apply", leadRouter)

app.listen(port ,()=>{
    console.log(`server running on port:- ${port}`)
} )
