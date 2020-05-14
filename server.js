const express = require("express");
const bodyParser = require("body-parser");
const request = require("request")

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/signup.html');
});


app.post('/', (req, res)=>{
    console.log(req.body);
    const firsttName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

});




app.listen(3000, ()=>{
    console.log("listening on port 3000");
});

//api
// 3ac4a3fa56e650529de85095c7e7346b-us19