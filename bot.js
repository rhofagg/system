const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("615596301601603801")
let channel =     client2.channels.get("615547032916197388")
let channel =     client3.channels.get("603198280339554315")
setInterval(function() {
channel.send(`هاي`);
}, 30)
})

client.login(process.env.BOT_TOKEN);