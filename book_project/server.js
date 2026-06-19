const express=
    require("express");
const cors = 
    require("cors");
const app=
    express();
require("./db");
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
//import routes
const bookRoutes = require("./routes/book");
//connect routes
app.use("/api/books",bookRoutes);

app.get("/",(req,res)=>{
    res.send(
        "Library Server Running"
    );
});
app.listen(5000,()=>{
    console.log(
        "Server Running on port 5000"
    );
});

