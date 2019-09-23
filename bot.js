

const Discord = require('discord.js');
const bot = new Discord.Client();
require('dotenv').config();

var msg;
var msgL;
var oL=2;
var reply;
var reply = "";
var wL;
var noot = 0;

function checkNoot(word)
{
    wL=word.length
    oL=2;
    if(word.charAt(0)=="n" && word.charAt(1)=="o" & word.charAt(2)=="o" && word.charAt(wL-1)=="t")
    {
        console.log("is noot, check")

        noot = 1;

        while(word.charAt(oL)=="o")
        {
            oL++;
        }
        
        console.log("ooo lenght= "+oL);
        

        reply = reply.concat("N".concat("O".repeat(oL-1)).concat("T").concat(" "));

        console.log("curr reply ="+reply+"\n");

        //message.channel.sendMessage("**"+reply+"**");

        //oL = 2;
        //reply ="N";
    }
}


function stringSplit(string)
{
    var split = string.split(" ");

    for(wI=0;wI<split.length;wI++)
    {
        console.log(split[wI]+" "+wI+"\n");
    
        var word=split[wI].toLowerCase();

        checkNoot(word);
    }


}

bot.on('message', (message)=> 
{
    if(message.content.toLowerCase().includes("!getserver")&& message.author.id == "165937223554826241")
    {
        serverList = bot.guilds.map(g=>g.name+" "+g.memberCount).join('\n');
        message.channel.send("i am in "+bot.guilds.size+" servers");    
        message.channel.send(serverList, {split:true}); 
        
    }
    
    if(!message.author.bot)
    {
        msg = message.content.toLowerCase();
        //msgL = msg.length;
        stringSplit(msg)

        if(noot==1)
        {

            noot=0;
            message.channel.send("**"+reply+"**");
            reply="";
        }
    }

});

bot.login(process.env.token);
//console.log(process.env.token);
console.log("check");
