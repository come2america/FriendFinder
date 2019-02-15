module.exports = function(app) {
var friends = [
    {
        name: "Bob",
        photo: "",
       points: 5
    }
];
var matches= {};


app.post("/api/survey", function(req, res) {
    
    var userInput = req.body;
  
    
    console.log(userInput);
  
 
 for( var y=0 ; y< friends.length;y++){
     if((Number(userInput.points))-(Number(friends[y].points))<=3){
    matches=friends[y]; 

}
 res.json(matches);
 }
 friends.push(userInput);


//   usergetter()
  });


app.get("/api/survey", function (req, res) {
    return res.json(matches);

})


;}
