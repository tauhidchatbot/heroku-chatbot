var mongoose = require('mongoose');
// var dburl = 'mongodb://localhost/studentDB';
var dburl    = 'mongodb://127.0.0.1:27017/chatBotDB';
//var dburl = "mongodb://tauhid_raza:Amartam@123@ds235461.mlab.com:35461/tauhidbotdb";
//mongodb://<dbuser>:<dbpassword>@ds235461.mlab.com:35461/tauhidbotdb

mongoose.connect(dburl, { useNewUrlParser: true });
//console.log('mongoose default connection open to' + " " + dburl);
mongoose.connection.on('connected',function() {
	console.log('mongoose default connection open to' + " " + dburl);
	
});
mongoose.connection.on('err',function(err){
	console.log('mongoose default connection err' + err);
});
