const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-basketball.p.rapidapi.com/timezone",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
		"X-RapidAPI-Host": "api-basketball.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});