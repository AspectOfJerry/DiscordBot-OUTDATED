module.exports = {
    name: 'kick',
    description: "Usage: ,kick <@user>",
    execute(message, args, cmd, client, Discord) {
        if(message.member.roles.cache.has('890076942164983808')) {    //If 'message.member' has the role 'moderator goldfish'
            const target = message.mentions.users.first();
            if(!args[0]) {
                const requireArgs0 = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, size: 32})}`)
                    .setTitle('Error')
                    .setDescription('You must mention a member')

                message.channel.send(requireArgs0)
            } else {
                if(target) {    //If 'target' is valid
                    const memberTarget = message.guild.members.cache.get(target.id);
                    const userKickedBy = new Discord.MessageEmbed()
                        .setColor('#ff0000')
                        .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, size: 32})}`)
                        .setTitle('User kick')
                        .setDescription(`<@${memberTarget.user.id}> was kicked from the guild by <@${message.member.user.id}>`)
                        .setImage(`${memberTarget.user.displayAvatarURL({dynamic: true, size: 64})}`)
                    const targetHigherThanSender403 = new Discord.MessageEmbed()
                        .setColor('#ff0000')
                        .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, size: 32})}`)
                        .setTitle('Permissions error')
                        .setDescription(`<@${memberTarget.user.id}> has an equal or higher role than <@${message.member.user.id}>`)
                    const targetImmune403 = new Discord.MessageEmbed()
                        .setColor('#ff0000')
                        .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, size: 32})}`)
                        .setTitle('Permissions error')
                        .setDescription(`<@${memberTarget.user.id}> is immune to this command!`)
                    if(memberTarget == message.member) { //If 'memberTarget' is equal to 'message.member'
                        const cannotUseOnSelf = new Discord.MessageEmbed()
                            .setColor('#ff0000')
                            .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, size: 32})}`)
                            .setTitle('Error')
                            .setDescription('You cannot use this command on yourself!')

                        message.channel.send(cannotUseOnSelf);
                    } else {
                        if(message.member.roles.cache.has('890075267517784116')) {    //If 'message.member' has the role 'overlord goldfish'
                            if(memberTarget.roles.cache.has('890075775540281384')) {    //If 'memberTarget' has the role 'bots'
                                message.channel.send(targetImmune403);
                            } else if(memberTarget.roles.cache.has('890075267517784116')) { //If 'memberTarget, has the role 'overlord goldfish'
                                message.channel.send(targetHigherThanSender403);
                            } else {
                                try {
                                    memberTarget.kick().catch(console.error);   //Kick 'memberTarget'

                                    message.channel.send(userKickedBy)
                                    message.guild.channels.cache.get('890067108287873094').send(userKickedBy)
                                } catch(error) {
                                    const errorCatch = new Discord.MessageEmbed()
                                        .setColor('#800080')
                                        .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, size: 32})}`)
                                        .setTitle('Error Catch')
                                        .setDescription(`An error occured while trying to kick <@${memberTarget.user.id}>`)
                                        .setFooter(`An error was caught at line 55:35\nmessage.content = ${message.content}`)

                                    message.channel.send(errorCatch)
                                }
                            }
                        } else if(message.member.roles.cache.has('890076599926521916')) {   //If 'message.member' has the role 'admin goldfish'
                            if(memberTarget.roles.cache.has('890075775540281384')) {    //If 'memberTarget' has the role 'bots'
                                message.channel.send(targetImmune403);
                            } else if(memberTarget.roles.cache.has('890075267517784116')) { //If 'memberTarget' has the role 'overlord goldfish'
                                message.channel.send(targetHigherThanSender403);
                            } else if(memberTarget.roles.cache.has('890076599926521916')) { //If 'memberTarget' has the role 'admin goldfish'
                                message.channel.send(targetHigherThanSender403);
                            } else {
                                try {
                                    memberTarget.kick().catch(console.error);   //Kick 'memberTarget'

                                    message.channel.send(userKickedBy)
                                    message.guild.channels.cache.get('890067108287873094').send(userKickedBy)
                                } catch(error) {
                                    const errorCatch = new Discord.MessageEmbed()
                                        .setColor('#800080')
                                        .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, size: 32})}`)
                                        .setTitle('Error Catch')
                                        .setDescription(`An error occured while trying to kick <@${memberTarget.user.id}>`)
                                        .setFooter(`An error was caught at line 79:35\nmessage.content = ${message.content}`)

                                    message.channel.send(errorCatch)
                                }
                            }
                        } else if(message.member.roles.cache.has('890076942164983808')) { //If 'message.member' has the role 'moderator goldfish'
                            if(memberTarget.roles.cache.has('890075775540281384')) {    //If 'memberTarget' has the role 'bots'
                                message.channel.send(targetImmune403)
                            } else if(memberTarget.roles.cache.has('890075267517784116')) { //If 'memberTarget' has the role 'overlord goldfish'
                                message.channel.send(targetHigherThanSender403)
                            } else if(memberTarget.roles.cache.has('890076599926521916')) { //If 'memberTarget' has the role 'admin goldfish'
                                message.channel.send(targetHigherThanSender403)
                            } else if(memberTarget.roles.cache.has('890076942164983808')) { //If 'memberTarget' has the role 'moderator goldfish'
                                message.channel.send(targetHigherThanSender403)
                            } else {
                                try {
                                    memberTarget.kick().catch(console.error);   //Kick 'memberTarget'

                                    message.channel.send(userKickedBy)
                                    message.guild.channels.cache.get('890067108287873094').send(userKickedBy)
                                } catch(error) {
                                    const errorCatch = new Discord.MessageEmbed()
                                        .setColor('#800080')
                                        .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, size: 32})}`)
                                        .setTitle('Error Catch')
                                        .setDescription(`An error occured while trying to kick <@${memberTarget.user.id}>`)
                                        .setFooter(`An error was caught at line 105:35\nmessage.content = ${message.content}`)

                                    message.channel.send(errorCatch)
                                }
                            }
                        } else {
                            try {
                                memberTarget.kick().catch(console.error);   //Kick 'memberTarget'

                                message.channel.send(userKickedBy)
                                message.guild.channels.cache.get('890067108287873094').send(userKickedBy)
                            } catch(error) {
                                const errorCatch = new Discord.MessageEmbed()
                                    .setColor('#800080')
                                    .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, size: 32})}`)
                                    .setTitle('Error Catch')
                                    .setDescription(`An error occured while trying to kick <@${memberTarget.user.id}>`)
                                    .setFooter(`An error was caught at line 122:31\nmessage.content = ${message.content}`)

                                message.channel.send(errorCatch)
                            }
                        }
                    }
                } else {
                    const targetError = new Discord.MessageEmbed()
                        .setColor('#ff0000')
                        .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, size: 32})}`)
                        .setTitle('Error')
                        .setDescription('The targeted member is invalid')

                    message.channel.send(targetError)
                }
            }
        } else {   //If 'message.member' does not have the 'BotPL2'
            const permissionsError = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setThumbnail(`${message.author.displayAvatarURL({dynamic: true, size: 32})}`)
                .setTitle('Permissions error')
                .setDescription("I'm sorry but you do not have the permissions to perform this command. Please contact the server administrators if you believe that this is an error.")

            message.channel.send(permissionsError)
        }
    }
}