var express = require("express");
var path = require("path");

 var app = express();
 var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);

 
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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


