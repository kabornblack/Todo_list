
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');


app.get("/", function(req, res){
  const d = new Date();
  const days = d.getDay();
  var day = "";

  if (days === 0){
    day = "Sunday";
  } else if (days === 1){
    day = "Monday";
  } else if (days === 2){
    day = "Tuesday";
  } else if (days === 3){
    day = "Wednesday";
  } else if (days === 4){
    day = "Thursday";
  } else if (days === 5){
    day = "Friday";
  } else {
    day = "Saturday";
  };

  res.render("list", {kingOfDay: day});

});




app.listen(3000, function(){
  console.log("Server is running on port 3000")
});
