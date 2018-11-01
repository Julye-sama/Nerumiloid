
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
   
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'with depression',
            type: "STREAMING",
            url: "https://www.twitch.tv/monstercat"
        }
    });
});

bot.on("guildMemberAdd",function(member) {
    var image = ["./welcomefile/1.gif","./welcomefile/2.gif","./welcomefile/3.gif"];
    var rand = Math.floor(Math.random() * image.length);
    var randomImage = image[rand];
    member.guild.channels.find("name","general").sendMessage(member.toString() + " welcome! ≧◡≦ take a seat and grab some cookies ~", ({files: [image[rand]]}));
    console.log(randomImage)
    member.addRole(member.guild.roles.find("name","loid")).catch(console.error);


bot.on("guildMemberRemove",function(member) {
    member.guild.channels.find("name","general").sendMessage(member.toString() + " Left the server, bye bye :cry:").catch(console.error);
  })});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;
  var msg = message.content.toUpperCase();

    if (message.content.startsWith("#pat head")) {
      message.channel.send ({files: ["./random_img/pat_head.png"]});
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
               .setImage(url = "http://i.imgur.com/38rACYP.gif")
               .setColor(0x00FFFF)
               message.channel.sendEmbed(embed);
          break;

   case "help":
             var embed = new Discord.RichEmbed()
             .setDescription("**let me lend you a hand ~ Command list:**                                                      #hello > hello nerumi !                                                                                                                        #8ball > ask a question                                                                                                      #pat head > pats nerumi's head")
             .setColor(0x00FFFF)
             message.channel.sendEmbed(embed);
          break;
      

}});


bot.login(TOKEN);
