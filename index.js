const commando = require('discord.js-commando');
const Bot = new commando.Client();

Bot.registry.registerGroup('random', 'Random');
Bot.registry.registerDefaults();
Bot.registry.registerCommandsIn(__dirname + "/commands");

Bot.login('NTkyODU4MDUyMzY2MTcyMTgw.XRFcdQ.OFMITPhFTfxUpk01x3aqmxhDKOI');


/*const Discord = require('discord.js');
const Bot = new Discord.Client();

Bot.on('ready', () => {
    console.log('Botty is now connected')
});

Bot.login('NTkyODU4MDUyMzY2MTcyMTgw.XRFcdQ.OFMITPhFTfxUpk01x3aqmxhDKOI');*/