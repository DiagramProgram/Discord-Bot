const commando = require('discord.js-commando');
const Bot = new commando.Client();

Bot.registry.registerGroup('random', 'Random');
Bot.registry.registerDefaults();
Bot.registry.registerCommandsIn(__dirname + "/commands");

Bot.login('TOP SECRET');
//If you are looking to create your own bot, change ^ to your token ID

/*const Discord = require('discord.js');
const Bot = new Discord.Client();

Bot.on('ready', () => {
    console.log('Botty is now connected')
});

Bot.login('TOP SECRET');*/