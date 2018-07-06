var express = require('express');

/*exports.index = function(req, res){
  //res.send("Hello Tauhid! Heroku Deploy");
  res.render('index');
}; */

exports.chatBot = function(req, res) {
	/*res.send(req.body);
	//res.send("Hello Tauhid! Heroku Deploy");*/
	const data = req.body;

	// Code the task you want to achieve with @data
	// Read the v2 api documentation of dialogflow : https://dialogflow.com/docs/fulfillment
	// Using the v2 will become mandatory, Google wrote a guide to migrate from v1 to v2 as v2 is officially released

	const response = {
		"message" : "Hello tauhid! Working fine for chatbot.",
		fulfillmentText: "Your webhook works fine !",
	}
res.json(response);
}