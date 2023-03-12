const express = require("express");
const core = require("core");
const app = express();
const port = process.env.PORT || 6000;


// middle ware

app.use(core());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("server is running", port)
});

app.listen(port, ()=>{
    console.log("server is running on port ", port);
})