
const Discord = require('discord.js');
const bot = new Discord.Client();
require('dotenv').config();

var msg;
var msgL;
var oL=2;
var reply = "N";

bot.on('message', (message)=> 
{
    msg = message.content.toLowerCase();
    msgL = msg.length;

    if(msg.charAt(0)=="n" && msg.charAt(1)=="o" & msg.charAt(2)=="o" && msg.charAt(msgL-1)=="t")
    {
        console.log("is noot, check")

        while(msg.charAt(oL)=="o")
        {
            oL++;
        }
        
        console.log("ooo lenght= "+oL);

        reply = reply.concat("O".repeat(oL-1)).concat("T")

        message.channel.sendMessage("**"+reply+"**");

        oL = 2;
        reply ="N";


    }

});

bot.login(process.env.token);
console.log("check");
