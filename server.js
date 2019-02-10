var express = require("express");
var path = require("path");
var mysql = require('mysql');
var friends = [
    {
        name: "Bob",
        photo: "",
       points: 5
    }
];
var matches= null;
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'friendfinder'
  });
  
  connection.connect();
  
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The connection is: good ' + connection.threadId);
   
    
  });


var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});


app.post("/api/survey", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var userInput = req.body;
  
    // Using a RegEx Pattern to remove spaces from reserveInput
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    userInput.routeName = userInput.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(userInput);
  
 
 for( var y=0 ; y< friends.length;y++){
     if((Number(userInput.points))-(Number(friends[y].points))<=3){
    matches=friends[y]; 

}
//  res.json(matches);
 }
 friends.push(userInput);


//   usergetter()
  });
app.get("/api/survey", function (req, res) {
    return res.json(matches);

});

       

    
//Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})


// function usergetter(newuser){
//     var sql = "INSERT INTO friends (user_name, points) VALUES (?, ?)";
//     connection.query(sql,[newuser[1].name], [newuser[1].points], function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
// }
// console.log(newuser);


