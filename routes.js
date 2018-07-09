module.exports = function(app) {
	console.log("i am in router file");

	var serverBotController = require('./app/controller/botController');


	//app.post('/chatBot', require('./controllers/chatController.js').chatBot);
	//app.post('/chatBot', serverBotController.chatBot);
	app.post('/chatBot', serverBotController.amitYadav);

	//app.get('/',chatBot.index);
}