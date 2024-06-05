import express from "express";
let app = express();
let PORT = process.env.PORT || 9000;

// First Problem solution : 
app.get("/hello-world",(req,res)=>res.json({"Message":"Hello From Node.Js"}));

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
