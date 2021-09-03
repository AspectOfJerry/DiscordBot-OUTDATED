const { execute } = require("./play");

module.exports = {
    name: 'leave',
    aliases: ['dc', 'disconnect'],
    cooldown: 10,
    description: 'Usage: "%leave <URL/keyWords>"',
    async execute(message, args, cmd, client, Discord) {
        const voiceChannel = message.member.voice.channel;

        const requireUserBeInChannel = new Discord.MessageEmbed()
            .setColor('#800080')
            .setTitle('Error')
            .setDescription('Could **not** perform the __command__! You must **be** in a __voice channel__ to use this command!')
            .setFooter('Join a voice channel and then, perform the command!')

        if(!voiceChannel) return message.channel.send(requireUserBeInChannel)
        await voiceChannel.leave();

        const leave = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setTitle('Disconnected from voice channel')
            .setDescription('Successfully left the channel!')
            .setFooter(`message.content = ${message.content}`)
        
        message.channel.send(leave)
    }
}