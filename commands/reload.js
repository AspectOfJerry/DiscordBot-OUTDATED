module.exports = {
    name: 'reload',
    aliases: ['update', 'rel', 'r', 'u', 'rs'],
    description: 'Usage: "%reload"',
    async execute(message, args, cmd, client, Discord) {

        if(message.member.roles.cache.find(role => role.name === 'BotPL3')) {
            const reloadingBot = new Discord.MessageEmbed()
                .setColor('#ffff00')
                .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, size: 32})}`)
                .setDescription('Reloading the bot...')

            message.channel.send(reloadingBot)

            //Set the client user's activity
            //client.user.setActivity('Something', {type: 'STREAMING', url: "https://www.twitch.tv/jiooy"}).catch(console.error);
            //client.user.setActivity('for "%"', { type: 'WATCHING' });
            //client.user.setActivity();

            const reloadedBot = new Discord.MessageEmbed()
                .setColor('#00ff00')
                .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, size: 16})}`)
                .setDescription(`Reloaded the bot!`)

            message.channel.bulkDelete(1).catch(console.error);
            await message.channel.send(reloadedBot)
        } else {
            const permissionsError = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription("I'm sorry but you do not have the permissions to perform this command. Please contact the server administrators if you believe that this is an error.")

            message.channel.send(permissionsError)
        }
    }
}
