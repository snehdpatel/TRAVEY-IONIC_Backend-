//var chgpass = require('config/chgpass');
var register = require('config/register');
var login = require('config/login');
//var requests = require('config/requests');
var editProfile = require('config/editProfile');
var reportAdd = require('config/reportAdd');
var getReports = require('config/getReports');
var locateMe = require('config/locateMe');
//var locationRefresh = require('config/locationRefresh');
//var upvoteDownvote = require('config/upvoteDownvote');
//var historyAdd = require('config/historyAdd');
//var distance = 1000/6371;
 

module.exports = function(app) {
    
	app.get('/', function(req, res) {
        res.end("Node-Android-Project"); 
	});


	app.post('/login',function(req,res){
		var phone_number = req.body.phone_number;
        var password = req.body.password;
		console.log("request found for login");


		login.login(phone_number,password,function (found) {
			console.log(found);
			res.json(found);
	});
	});

	app.post('/register',function(req,res){
        
        var user_name = req.body.user_name;
		var phone_number = req.body.phone_number;
		var email = req.body.email;
        var password = req.body.password;
        console.log("request found for register");

        register.register(user_name,phone_number,email,password,function (found) {
			console.log(found);
			res.json(found);
	});		
	});

	app.post('/update', function(req, res) {
	
		var phone_number = req.body.phone_number;
		var shared_location = req.body.shared_location;
		var email = req.body.email;
		var user_name = req.body.user_name;
		
		editProfile.update(phone_number,shared_location,email,user_name,function(found){			
			console.log(found);
			res.json(found);
	});		
	});

	app.post('/reportAdd',function(req,res){
		var lat = req.body.lat;
		var lng = req.body.lng;
		var detail = req.body.detail;
		var phone_number = req.body.phone_number;
		var tag = req.body.tag;
        var start_time = req.body.start_time;
        var end_time = req.body.end_time;

			
		reportAdd.reportAdd(phone_number,detail,tag,start_time,end_time,lat,lng,function (found) {
			console.log(found);
			res.json(found);
		});		
	});


	app.post('/getReports',function(req,res){
   		
		getReports.getReports(function(found){
			console.log(found);
			res.json(found);
		})
	});


	app.post('/locateMe',function(req,res){
		var lat = req.body.lat;
		var lng = req.body.lng;
		var phone_number = req.body.phone_number;
					
		locateMe.locateMe(phone_number,lat,lng,function (found) {
			console.log(found);
			res.json(found);
		});		
	});


	//app.post('/getContacts',function(req,res){
	//	var phone_number = req.body.phone_number;
 //       	//var password = req.body.password;

	//	getContacts.getContacts(phone_number,function (found) {
	//		console.log(found);
	//		res.json(found);
	//});
	//});


	//app.post('/upload', function(req, res) {
 //   	console.log(req.files.image.originalFilename);
 //   	console.log(req.files.image.path);
 //       fs.readFile(req.files.image.path, function (err, data){
 //       	var dirname = "C:/Users/Sneh_132/Downloads/TRAVEY";
 //       	var newPath = dirname + "/uploads/" +   req.files.image.originalFilename;
 //       	fs.writeFile(newPath, data, function (err) {
 //       		if(err){
 //       			res.json({'response':"Error"});
 //       		}else {
 //       			res.json({'response':"Saved"});
	//			}
	//		});
	//	});
	//});
 
 
	//app.get('/uploads/:file', function (req, res){
 //       file = req.params.file;
 //       var dirname = "C:/Users/Sneh_132/Downloads/TRAVEY";
 //       var img = fs.readFileSync(dirname + "/uploads/" + file);
 //       res.writeHead(200, {'Content-Type': 'image/jpg' });
 //       res.end(img, 'binary');
 //	});

	



	

//	app.post('/api/chgpass', function(req, res) {
//		var id = req.body.id;
//        var opass = req.body.oldpass;
//		var npass = req.body.newpass;

//		chgpass.cpass(id,opass,npass,function(found){
//			console.log(found);
//			res.json(found);
//	});	
//	});


//	app.post('/api/resetpass', function(req, res) {
	
//		var email = req.body.email;
		
//		chgpass.respass_init(email,function(found){
//			console.log(found);
//			res.json(found);
//	});		
//	});
	

//	app.post('/api/resetpass/chg', function(req, res) {
	
//		var email = req.body.email;
//		var code = req.body.code;
//		var npass = req.body.newpass;
		
//		chgpass.respass_chg(email,code,npass,function(found){			
//			console.log(found);
//			res.json(found);
//	});		
//	});


//	app.post('/ckeckExistNumber', function(req, res){
//		models.User.find({phone_number: req.body.phone_number},function(err,users){

//				var len = users.length;
//				if(len == 0){
//				 	res.json({'response':"yes"});
//				}else{

//					res.json({'response':"no"});
//				}
//			});
//	});

//	app.post('/getRating', function(req, res) {
	
//		models.User.find({phone_number: req.body.phone_number},function(err,users){

//				var len = users.length;
//				if(len != 0){
//					var rating = users[0].upvotes - users[0].downvotes;
//					console.log(rating);
//				 	res.json({'rating':rating});
//				}else{

//					res.json({'rating':"no"});
//				}
//			});
		
//	});


//	app.post('/send',function(req,res) {
//   		console.log("hi");
//   		var fromu = req.body.from;
//   		var fromn = req.body.fromn;
//   		var to = req.body.to;
//   		var title = req.body.title;


//   		requests.send(fromn, fromu, title,to, function (found) {
//      		console.log("hii");
//      		res.json(found);
//      	});
//	});

//	app.post('/historyAdd',function(req,res){
//		var phone_number = req.body.phone_number;
//		var history = req.body.history;

//		historyAdd.historyAdd(phone_number,history,function (found) {
//			console.log(found);
//			res.json(found);
//		});
//	});

//	app.post('/locationRefresh',function(req,res){
//		var phone_number = req.body.phone_number;
//		var lat = req.body.lat;
//		var long=req.body.long;

//		locationRefresh.locationRefresh(phone_number,lat,long,function (found) {
//			console.log(found);
//			res.json(found);
//		});
//	});



//	app.post('/setGcmid',function(req,res){
//   		models.User.find({phone_number: req.body.phone_number},function(err,reports){
//   			reports[0].gcm_id = req.body.gcm_id;
//   			reports[0].save();
//     		console.log(reports);

//      		res.json(reports);
//   		});
//	});


//	app.post('/getGcm',function(req,res){
//		var gcm;
//   		models.User.find({phone_number : req.body.phone_number},function(err,reports){
//     		console.log(reports.length);
//			res.json({'gcm_id': reports[0].gcm_id});
//			console.log(reports[0].gcm_id);
//   		});
//   		//res.json({'gcm_id': gcm});
//	});


//	app.post('/allContacts',function(req,res){
//   		models.User.find({},function(err,reports){
//     	console.log(reports);

//      	res.json(reports);
//   	});
//	});

//	app.post('/getUpvotes',function(req,res){
//   		models.Report.find({_id: req.body.reportId},function(err,reports){
//     	console.log(reports);

//      	res.json({'upvotes':reports[0].upvotes});
//   	});
//	});

//	app.post('/getDownvotes',function(req,res){
//   		models.Report.find({_id: req.body.reportId},function(err,reports){
//     	console.log(reports);

//      	res.json({'downvotes':reports[0].downvotes});
//   	});
//	});



//app.post('/reportNearBy',function(req,res){
//   var query = models.Report.find({'location': {
//      $near: [req.body.lat,req.body.long],
//      $maxDistance: distance
//   }
//   });

//   query.exec(function (err, city) {
//      if (err) {
//         console.log(err);
//         throw err;
//      }
//      else {
//         console.log('hi '+ city);
//         res.json(city);
//      }

//   });

//});


//app.post('/friendsNearBy',function(req,res){
//   var query = models.User.find({'location': {
//      $near: [req.body.lat,req.body.long],
//      $maxDistance: distance},'shared_location':"1"
//  } );

//   query.exec(function (err, city) {
//      if (err) {
//         console.log(err+ "what is this");
//         throw err;
//      }
//      else {
//         console.log('hi this is friends near by '+ city);
//         res.json(city);
//      }

//   });

//});

//app.post('/getMyLocation',function(req,res){
//	models.User.find({'phone_number': req.body.phone_number}, function(error,reports){
		
//			res.json(reports[0].location);
//		});

//});

//app.post('/getLocation',function(req,res){
//	models.User.find({'phone_number': req.body.phone_number}, function(error,reports){
//		if(reports[0].shared_location == "1"){
//			res.json(reports[0].location);
//		}else{
//			res.json([0,0]);
//		}
//		//
//	});
//});


//app.post('/shareLocation',function(req,res){
//	models.User.find({'phone_number': req.body.phone_number}, function(error,reports){
//		var fromu = reports[0].user_name;
//   		var fromn = "req.body.fromn";
   						
//		var title = phone_number;

//		requests.send(fromn, fromu, title,reports[0].gcm_id, function (found) {
//      		console.log("location send");
//      		res.json(found);
//      	});
//		//res.json(reports[0].location);
//	});
//});


//app.post('/reportUpVote',function(req,res){
//	var phone_number = req.body.phone_number;
//	var report_id = req.body.reportId;

//	upvoteDownvote.upvote(phone_number, report_id, function(err, found){
//		res.json(found);
//		console.log(found);
//	});
	
//});


//app.post('/reportDownVote',function(req,res){
//	var phone_number = req.body.phone_number;
//	var report_id = req.body.reportId;

//	upvoteDownvote.downvote(phone_number, report_id, function(err, found){
//		res.json(found);
//		//console.log(found);
//	});
//});

//app.post('/leaderBoard',function(req,res) {
//   var options = {
//      "limit": 20,
//      "sort": ['upvotes', 'desc']
//   };

//   models.User.find({}, function (err, docs) {
//      console.log("retrieved records:");
//      console.log(docs);
//      res.json(docs);
//   });
//});

//app.post('/history', function(req,res){
//	models.User.find({phone_number : req.body.phone_number}, function(err, users){
//			res.json(users[0]);
//	});
//});


//app.post('/getImage', function(req, res){
//	models.User.find({phone_number : req.body.phone_number}, function(err, users){
//			//res.json(users[0].image);
//			//console.log(users[0].image);
//	});
//});

//app.post('/shareLocationWithFriend', function(req, res){
//	models.User.find({phone_number : req.body.phone_number}, function(err, users){
//		var fromu = "req.body.phone_number";
//   		var fromn = "req.body.fromn";
   						
//   		var title = "Share your location to"+ req.body.user_name;

//			requests.send(fromn, fromu, title,users[0].gcm_id, function (found) {
//      			console.log(users[0].phone_number );
//      			console.log(users[0].gcm_id);
//      			console.log(found);
//      			res.json(found);
//      		});	
//			//res.json(users[0].image);
//			//console.log(users[0].image);
//	});
//});

//app.post('/checkAllowedToPost', function(req, res){
//	models.User.find({phone_number : req.body.phone_number}, function(err, users){
//			res.json({'res': users[0].allowed_to_post});
//			console.log(res);
//	});
//});

	
};



