const express = require("express");
const app = express();
const fs = require('fs');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}))

const myjson = {
  "numbers":[]
};

app.get("/numbers",function(req,res){
res.send(myjson);
});

app.post("/number/:numberTitle",function(req,res){

  const numbers = req.params.numbers
  myjson.push(numbers);
  console.log('Sucessfully pushed the numbers');
});

app.listen(3000,function(){
console.log('Server Running on port 3000');
})
