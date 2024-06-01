const sqlite3 = require('sqlite3').verbose();
const dbName = "database.db"

const db = new sqlite3.Database(dbName, (err)=>{
    if(err){
        console.error(err)
    }else{
        console.log("Connected to Database")
    }
});