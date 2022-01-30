const express= require("express")
const app =express();
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req, res){
res.sendFile(__dirname + "/index.html");
});
// now create post method for posting in home route
app.post("/",function(req, res){
  // console.log(req.body.num1);
  var num1= Number(req.body.num1);
  var num2 =Number(req.body.num2);
  var result= num1 +num2;

  res.send("The Result of the calculation is " +result);
});

app.listen(3000,function(req,res){
  console.log("Server Started on port 3000");
});
