const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const items=require("./routes/api/items")
const app=express();

app.use(bodyParser.json())
//DB config
const db=require("./config/keys").mongoURI;
//connect to Mongo
mongoose
    .connect(db)
    .then(()=>console.log("MongoDB Connected...."))
    .catch((err)=>console.log("error"));

//Use routes
app.use("/api/items",items)
if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('/client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
    });
  }

const port=process.env.PORT || 5000;
app.listen(port,()=>console.log(`Server started on port"${port}`));