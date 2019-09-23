var express=require("express");
var app=express();
var request=require("request");

app.get("/weather",function(req,res1){

	let apikey='00fabcfb7e32d73afa5b8a9600b7b919';
	let city="surat";
	let url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

	request(url,function(err,res,body){
		if(err)
		{
			console.log('error',err);
			res1.send(err);
		}
		else
		{
			var weather=JSON.parse(body)
			var t=`temparature = ${ weather.main.temp } degrees in city=${ weather.name } !`;
			console.log(weather);
			res1.send(t);
		}
	});
});

app.listen(8000);