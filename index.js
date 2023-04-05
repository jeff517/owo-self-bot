const Discord = require("discord.js");
const client = new Discord.Client();
const {
	JsonDatabase
} = require("wio.db");
const db = new JsonDatabase("db");
var kanal = "channelid"; // Type channel id
var sahip = "ownerid"; // Type user id

client.on("ready",()=>{
	console.log("Jeff OwO Bot Started!");
});

// u can change all commands
setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("wh");
	};
},16500);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("wb");
	};
},17500);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("ws 1000");
	};
},20000);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("wcf 1000");
	};
},24000);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("w pray <@$533591831443931136>");
	};
},300000);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("w sell all");
	};
},1000000);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("w sc all");
	};
},600000);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("w cash");
	};
},200000);
// u can change all commands

client.on("message",message=>{
	if(message.channel.id==kanal || message.channel.type == "dm"){
		if(message.author.id=="408785106942164992"){ // owo bot id
			if(message.content.includes("Beep Boop") || message.content.includes("Please DM me") || message.content.includes("human") || message.content.includes("check")){
				db.set("owodg","1");
				message.channel.send("`OwO bot güvenlik sistemi başarılı bir şekilde engellendi.`");
			};
		};
	};

	if(message.author.id == sahip){
		if(message.content == "j!open"){
			db.set("owodg","0");
			message.channel.send("Jeff OwO Bot Opened");
		};
	};
});


client.login("token"); // Write User Token
