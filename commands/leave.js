const ytdl = require('ytdl-core');
const Discord = require('discord.js');
module.exports.run  = function(client, message, args){
    var args = message.content.split(" ");
    const streamOptions = { seek: 0, volume: 1 };
    var voiceChannel = message.member.voice.channel;
      
    if(message.member.permissions.has('MOVE_MEMBERS'))
    {
                voiceChannel.leave();
                
         
            const playembed = new Discord.MessageEmbed()
            .setColor('#000000')
            .setTitle('🎶Stoping All Music'+"🎶") 
            .setURL("")
            .setAuthor( message.author.username, message.author.avatarURL, "")
            .setDescription('Admin Request by <@!' + message.author.id + '> ')
            .setThumbnail('https://thumbs.gfycat.com/AcclaimedHeartfeltGoat-size_restricted.gif')
            .setImage("https://thumbs.gfycat.com/AcclaimedHeartfeltGoat-size_restricted.gif")
            .setTimestamp()
            .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
            message.channel.send(playembed)
            message.delete();
}
else
{
    const playembed = new Discord.MessageEmbed()
    .setColor('#000000')
    .setTitle("⛔Leave Accesss Denied⛔") 
    .setURL("")
    .setAuthor( message.author.username, message.author.avatarURL, "")
    .setDescription('Attempted by <@!' + message.author.id + '> ')
    .setThumbnail('https://thumbs.gfycat.com/AcclaimedHeartfeltGoat-size_restricted.gif')
    .setImage("https://f0.pngfuel.com/png/948/630/pirate-signage-illustration-png-clip-art.png")
    .setTimestamp()
    .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
    message.delete();
}
}
module.exports.help = {
    name:"leave"
  }
  