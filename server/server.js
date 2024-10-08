const express = require("express");
const app = express();
const PORT = process.env.port || 8200;
const mysql = require("mysql");
const bodyParser = require("body-parser");
const {urlencoded} = require("body-parser");
const cors = require("cors");

//데이터베이스 접근 정보구성
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"7859",
    database:"bbs"
})

//서버가 지정포트에서 구동되는지 확인
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/get", (req, res) => {
    const sql = "select * from biblelog;";
    db.query(sql, (err, result) => {
        res.send(result);
    })
})
