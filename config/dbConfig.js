var mongoose = require('mongoose');
// var dburl = 'mongodb://localhost/studentDB';
//var dburl    = 'mongodb://127.0.0.1:27017/chatBotDB';
var dburl = "mongodb://tauhid_raza:Amartam@123@ds217921.mlab.com:17921/tauhidbotdb";
//console.log('Hello trk khan');
mongoose.connect(dburl, { useNewUrlParser: true });
mongoose.connection.on('connected',function() {
	console.log('mongoose default connection open to' + " " + dburl);
	// body...
});
mongoose.connection.on('err',function(err){
	console.log('mongoose default connection err' + err);
});


//var url = 'mongodb://Chabbe:XXXX@ds143754.mlab.com:43754/gamestore';

//mongodb://<dbuser>:<dbpassword>@ds217921.mlab.com:17921/chatbot