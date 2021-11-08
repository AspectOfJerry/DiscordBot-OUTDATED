module.exports = {
    name: 'report',
    aliases: ['wdr', 'wdreport', 'watchdogreport', 'chatreport', 'flag'],
    description: 'Usage: "%report <@user>"',
    execute(message, args, cmd, client, Discord) {
        const target = message.mentions.users.first();
        if(!args[0]) {
            const requireArgs0 = new Discord.MessageEmbed()
                .setColor('#00ff00')
                .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, size: 32})}`)
                .setTitle('Error')
                .setDescription('You must mention a member!')
                .setFooter(`%report "<args[0]>" <args[1]>`)

            message.channel.send(requireArgs0)
        } else {
            if(target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                if(args[1]) {
                    const report = new Discord.MessageEmbed()
                        .setColor('00ff00')
                        .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, size: 32})}`)
                        .setTitle('Report submitted')
                        .setDescription(`<@${message.member.user.id}> reported <@${memberTarget.user.id}>`)
                        .addField(`Message:`, `${message.content}`, false)
                        .setImage(`${memberTarget.user.displayAvatarURL({dynamic: true, size: 64})}`)
                        .setFooter('Thanks for your report. We understand your concerns and it will be reviewed as soon as possible.\nDo not report for nothing since it pings staff members.')

                    message.channel.send(report)
                    message.guild.channels.cache.find(channel => channel.name.includes('bot-log')).send(`<@&697914535863910561>, <@&642107004076163103>`)
                    message.guild.channels.cache.find(channel => channel.name.includes('bot-log')).send(report)
                } else {
                    const requireArgs1 = new Discord.MessageEmbed()
                        .setColor('#ff0000')
                        .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, size: 32})}`)
                        .setTitle('Error')
                        .setDescription('You must provide a reason')
                        .setFooter(`%report <args[0]> "<args[1]>"`)

                    message.channel.send(requireArgs1)
                }
            } else {
                const targetError = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, size: 32})}`)
                    .setTitle('Error')
                    .setDescription('The targeted member is invalid!')
                    .setFooter(`%report "<args[0]"> <args[1]>`)

                message.channel.send(targetError)
            }
        }
    }
}
