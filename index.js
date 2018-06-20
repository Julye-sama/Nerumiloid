const Discord = require('discord.js');

const TOKEN = process.env.TOKEN;
const PREFIX = "#";


var fortunes = [
  ":8ball: | Yas !",
  ":8ball: | Hmmm let me think..",
  ":8ball: | Maybe",
  ":8ball: | possibly",
  ":8ball: | Nope !",
  ":8ball: | Never ~"
];

var bot = new Discord.Client({autoReconnect: true});

bot.on("ready", function() {

  console.log("ready");
  games = ["#help | your favourite vocaloid bot! ≧◡≦","#help | Who ate my eggplants ?!","#help | my ice cream.. NOOO (╥﹏╥)","#help | Ok, SAKE TIME !"];
  randGame = Math.floor(Math.random() * games.length);
  bot.user.setActivity(games[randGame]);

});

bot.on("guildMemberAdd",function(member) {
    member.guild.channels.find("name","general").sendMessage(member.toString() + " welcome! ≧◡≦ take a seat and grab some cookies ~");

    member.addRole(member.guild.roles.find("name","loid")).catch(console.error);
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;
  var msg = message.content.toUpperCase();

    if (msg.includes("SEBOE")) {
      message.delete();
      message.channel.send("Não é seboe, é seboso ~")
     }

    if (message.content.startsWith("#pat head")) {
      message.channel.send ({files: ["./random_img/pat_head.png"]});
      }

      if (message.content.startsWith("#kiyoteru")) {
        var images = ["./kiyoteru/1.jpg","./kiyoteru/2.jpg","./kiyoteru/3.jpg","./kiyoteru/4.gif", "./kiyoteru/5.jpg", "./kiyoteru/6.jpg", "./kiyoteru/6.jpg", "./kiyoteru/7.jpg", "./kiyoteru/8.jpg", "./kiyoteru/9.jpg", "./kiyoteru/10.jpg", "./kiyoteru/11.jpg", "./kiyoteru/12.jpg", "./kiyoteru/13.jpg", "./kiyoteru/14.png", "./kiyoteru/15.jpg", "./kiyoteru/16.jpg", "./kiyoteru/17.jpg", "./kiyoteru/18.jpg", "./kiyoteru/19.jpg", "./kiyoteru/20.jpg", "./kiyoteru/21.jpg", "./kiyoteru/22.jpg","./kiyoteru/23.png", "./kiyoteru/24.png", "./kiyoteru/25.jpg"];
        var rand = Math.floor(Math.random() * images.length);
        var randomImage = images[rand];
        message.channel.send ("Hiyama Kiyoteru (氷山キヨテル)| ©AH-Software Co. Ltd| release date: December 2009" + images[rand]);
       console.log( randomImage )
       return;
       }

   if (!message.content.startsWith(PREFIX)) return;
  
    var args = message.content.substring(PREFIX.length).split(" ");


    switch (args[0].toLowerCase()) {
    case "8ball":
      if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
      else message.channel.sendMessage(":8ball: How to use, type: #8ball and your question after")
         break;

    case "hello":
            var embed = new Discord.RichEmbed()
               .setDescription("Hai! :3 nerumi-chan at your service ~")
               .setImage(url = "https://img.buzzfeed.com/buzzfeed-static/static/2013-12/enhanced/webdr05/3/12/anigif_enhanced-buzz-6532-1386090414-9.gif")
               .setColor(0x00FFFF)
               message.channel.sendEmbed(embed);
          break;

   case "help":
             var embed = new Discord.RichEmbed()
             .setDescription("let me lend you a hand ~ Command list:                                                      #hello > hello nerumi !                                                                                                                        #8ball > ask a question                                                                                                      #pat head > pats nerumi's head")
             .setColor(0x00FFFF)
             message.channel.sendEmbed(embed);
          break;
      

}});


bot.login(process.env.TOKEN);
