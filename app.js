

const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.get("/", function(req, res){
  const d = new Date();
  const day = d.getDay();
  if (day === 6 || day === 0){
    res.write("Yay! Its weekend and i dont have to work");
  } else {
    res.write("Opps! its a working day");
  }
  res.send();
});




app.listen(3000, function(){
  console.log("Server is running on port 3000")
});
