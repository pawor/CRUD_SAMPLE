const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user:"root",
    server:"localhost",
    password:"",
    database:"test"
})

app.get("/api", (req,res) => {
    db.query("SELECT *FROM ITEMS_USAGE",(err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.listen('3001',() => {
    console.log('Server is running on port 3001')
})
