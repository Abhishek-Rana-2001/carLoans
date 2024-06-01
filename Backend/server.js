const express = require("express")
const app = express()
const cors = require("cors")
const port  = process.env.PORT || 8080

app.use(cors({
    origin:"*"
}))

app.get("/",(req, res)=>{
    console.log("worked")
    res.send("worked")
})



app.listen(port ,()=>{
    console.log(`server running on port:- ${port}`)
} )
