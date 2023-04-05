const express = require("express");
const dotenv =require("dotenv");
const {data} = require("./data/data");
const MongoDb = require("./config/db");
const cors = require('cors');
const  detailsRoutes  = require("./routes/detailsRoutes")


const app = express();
dotenv.config();

MongoDb();
app.use(cors());
app.use(express.json());


console.log(data)
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
//   });
app.get("/",(req,resp)=>{
    resp.send("Api is Running successfully");
})

app.use("/api/details", detailsRoutes);

// app.get("/api/data",(req,resp)=>{
//     resp.send(data);
// })


const PORT = process.env.PORT || 5000;
app.listen(5000,console.log(`server started on Port ${PORT}`));