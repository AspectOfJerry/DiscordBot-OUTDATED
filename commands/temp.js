module.exports = {
    name: 'ping',
    aliases: ['call'],
    description: 'Usage: "%ping"',
    execute(message, args, cmd, client, Discord){
        message.reply('temp.js')
    }
}