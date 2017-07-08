module.exports = function(app) {
    app.get("/",function(req, res) {
        res.render('index');
    });
	
	app.post('/validate',function(req,res){
		res.setHeader('Content-Type', 'application/json');
		
		var email = req.body.email;
		
		var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if(regex.test(email)){
			res.send(JSON.stringify({
				isValid: true
			}));	
		}else{
			res.send(JSON.stringify({
				isValid: false
			}));
		}

		console.log('you posted: Email: ' + req.body.email 	);
	});
}