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

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//리스트를 만들기 위해 모든 데이터들 가져오는 메서드
app.get("/get", (req, res) => {
    const sql = "select * from biblelog;";
    db.query(sql, (err, result) => {
        res.send(result);
    })
})

//상세보기를 위해서 id가 일치하는 데이터만 가져오는 메서드
app.get("/detail/:id", (req, res) => {
    const value = req.params.id;
    const sql = "select * from biblelog where id=?;";
    db.query(sql, value, (err, result) => {
        res.send(result);
    })
})

//입력
app.post("/insert", (req, res) => {
    const verse = req.body.verse;
    const memo = req.body.memo;
    const sql = "insert into biblelog(verse, memo) values(?, ?);";
    db.query(sql, [verse,memo], (err, result) => {
        res.send("성공");
    })
})

//삭제 - 상세보기하고 있는 데이터를 id로 조회하여 삭제
app.delete("/delete/:id", (req, res) => {
    const value = req.params.id;
    const sql = "delete from biblelog where id=?;";
    db.query(sql, value, (err, result) => {
        res.send(result);
    })
})

//서버가 지정포트에서 구동되는지 확인
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})
