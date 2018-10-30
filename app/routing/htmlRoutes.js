var path = require('path');

module.exports = function(app){

	// Home page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
    });
    
    //survey
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
      });

};