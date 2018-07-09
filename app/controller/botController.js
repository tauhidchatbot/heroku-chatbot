var express = require('express');
//var functions = require('firebase-functions');

var bodyParser = require('body-parser');

/*exports.index = function(req, res){
  //res.send("Hello Tauhid! Heroku Deploy");
  res.render('index');
}; */

//exports.chatBot = functions.https.onRequest((request, response) => {



	// Code the task you want to achieve with @data
	// Read the v2 api documentation of dialogflow : https://dialogflow.com/docs/fulfillment
	// Using the v2 will become mandatory, Google wrote a guide to migrate from v1 to v2 as v2 is officially released

	/*var response = {
		fulfillmentText: "My name is khan, From chatbot hub",
	}
    res.json(response);*/

exports.pizzabot = function(req, res) {

console.log("hello tauhid pizza bot details");

if (req.body.result.action === "a_fetch_user_details") {
	console.log("fetch user action fired");
	if (req.body.result.parameters["username"] != "") {
		return res.json({
			speech : "Fetched user details",
			displaytext : "welcome Tauhid Raza Khan!",
			followupEvent : {
				"data" : {
					"pizzatype" : req.body.result.parameters["pizzatype"],
					"pizzasize" : req.body.result.parameters["pizzasize"],
					"username"  : req.body.result.parameters["username"],
					"address"   : "Sohana Road Gurgaon",
					"phonenum"  : "1234567891",
					"email"     : "khan@gmail.com"
					//"email"     : req.body.result.parameters["email"]
				},
				name : "e_fetch_user_details"
			},
			source : "from tauhid"
		});
	}
}

}