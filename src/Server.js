// // ==========================================================CONNECT WITH DATABASE====================================================
// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql");

// const app = express();
// app.use(cors);
// app.use(express.json());
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "bcmbd",
// });
// // =================================================================================================================================

// // ==========================================================CHUYỂN TRANG BẰNG "/" ĐỂ HIỂN THỊ DATA TỪ DATABASE====================================================
// app.get("/", (req, res) => {
//   const sql = "SELECT * FROM info_sp";
//   db.query(sql, (err, data) => {
//     if (err) return res.json("Kết nối không thành công!");
//     return res.json(data);
//   });
// });

// app.get("/info_sp", (re, res) => {
//   const sql = "SELECT * FROM info_sp";
//   db.query(sql, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });
// app.get("/info_tintuc", (re, res) => {
//   const sql = "SELECT * FROM info_tintuc";
//   db.query(sql, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });
// app.listen(3002, () => {
//   console.log("Listening....");
// });

// // =================================================================================================================================
