const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'
const ms = require('ms');
const fs = require('fs');
const dateFormat = require('dateformat');
const {Canvas, canvas} = require('canvas')
const jimp = require('jimp')
const moment = require("moment");
const id = ['362581648644243486', '454527533279608852', ' 334661840179167242' ] 


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Miracle`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

//voise online
client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('449679201524514827');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Miracle Online: [${currentSize}]`);
  if (currentSize !== size) channel.setName(`Miracle Online: [${currentSize}]`);
});

//id
client.on('message', message => {
    
if(message.content.split(' ')[0] == prefix + 'id') {
if(!message.channel.guild) return;

let args = message.content.split(' ').slice(1).join(' ');

       let defineduser = '';
       if (!args[1]) { 
           defineduser = message.author;
       } else { // Run this if they did define someone...
           let firstMentioned = message.mentions.users.first();
           defineduser = firstMentioned;
       }

       const w = ['./img/id2.png'];
       var Canvas = require('canvas')
var jimp = require('jimp')

        const millis = new Date().getTime() - defineduser.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy');
const stats2 = ['online', 'Low', 'Medium', 'Insane'];
const days = millis / 1000 / 60 / 60 / 24;
         dateFormat(now, 'dddd, mmmm dS, yyyy');
             let time = `${dateFormat(defineduser.createdAt)}`
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
            var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
       let Image = Canvas.Image,
           canvas = new Canvas(300, 300),
           ctx = canvas.getContext('2d');
       ctx.patternQuality = 'bilinear';
       ctx.filter = 'bilinear';
       ctx.antialias = 'subpixel';
 
       fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
           if (err) return console.log(err);
           let BG = Canvas.Image;
           let ground = new Image;
           ground.src = Background;
           ctx.drawImage(ground, 0, 0, 300, 300);

})
  var mentionned = message.mentions.users.first();

   var client;
     if(mentionned){
         var client = mentionned;
     } else {
         var client = message.author;
         
     }

var men = message.mentions.users.first();
           var heg;
           if(men) {
               heg = men
           } else {
               heg = message.author
           }
               let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                   if (err) return console.log(err);
                   ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                       if (err) return console.log(err);

                       let Avatar = Canvas.Image;
                       let ava = new Avatar;
                       ava.src = buf;
                       ctx.drawImage(ava, 112 , 40, 75, 75);
                       
                       
                       
                       
                       var status;
   if (defineduser.presence.status === 'online') {
       status = 'ONLINE';
ctx.fillStyle = `#2ce032`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
 
   } else if (defineduser.presence.status === 'dnd') {
       status = 'DND';
       ctx.fillStyle = `#ff0000`;
ctx.beginPath();
ctx.arc(179, 107, 8, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   } else if (defineduser.presence.status === 'idle') {
       status = 'IDLE';
       ctx.fillStyle = `#f4d32e`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   } else if (defineduser.presence.status === 'offline') {
       status = 'INVISIABLE';
       ctx.fillStyle = `#898988`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   }
                       
                       
                                             var time2;
     if(mentionned){
         var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
     } else {
         var time2 = `${dateFormat(message.member.joinedAt)}`;
         
     }  
                          
   
                       ctx.font = 'Bold 15px Arial ';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(status, 70 , 108 );
                       
                        ctx.font = 'Bold 13px Arial';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${message.author.presence.game === null ? "No Status" : message.author.presence.game.name}`, 150.00   , 180  );

                      
                       ctx.font = 'Bold 20px Arial ';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${defineduser.username}`, 150.50 , 140);


                       ctx.font = 'Bold 15px Arial';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`#${defineduser.discriminator}`, 227  , 108);

                       var time2;
     if(mentionned){
         var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
     } else {
         var time2 = `${dateFormat(message.member.joinedAt)}`;
         
     }

                       ctx.font = 'Bold 13px Arial ';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${moment(defineduser.createdTimestamp).fromNow()}`, 179 , 226 );
                       
                       
    
          
                       ctx.font = 'Bold 13px Arial ';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}`, 179 , 253);
                       
message.channel.sendFile(canvas.toBuffer())


       })
   })




}

});


client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!id.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'setplaying')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setwatching')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setliste')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setstrem')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

//channel-Create
client.on('channelCreate', cc => {
    const channel = cc.guild.channels.find("name", "log")
	
	if(cc.type === 'text') {
        var roomType = ':pencil: #';
    }else
    if(cc.type === 'voice') {
        var roomType = ':microphone: ';
    }else
    if(cc.type === 'category') {
        var roomType = '';
    }
    
	    cc.guild.fetchAuditLogs().then(logs => {
	var userid = logs.entries.first().executor.id;
	var userava = logs.entries.first().executor.avatarURL;
	var usertag = logs.entries.first().executor.tag;

    var embed = new Discord.RichEmbed()
    .setAuthor(cc.guild.name, cc.guild.iconURL)
    .setDescription(`***Channel Created Name: *** **${roomType}${cc.name}**\n by : <@${userid}>`)
    .setColor('#ff0000')
    .setFooter(`${usertag}`, userava)
    .setTimestamp();
    channel.sendEmbed(embed)
   })
});

//channelUpdate
client.on('channelUpdate', (oldChannel, newChannel) => {
    if(!oldChannel.guild) return;
 
    var logChannel = oldChannel.guild.channels.find("name", "log")
    if(!logChannel) return;
 
    if(oldChannel.type === 'text') {
        var channelType = 'Text';
    }else
    if(oldChannel.type === 'voice') {
        var channelType = 'Voice';
    }else
    if(oldChannel.type === 'category') {
        var channelType = 'Category';
    }
 
    oldChannel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
	var usertag = logs.entries.first().executor.tag;
 
        if(oldChannel.name !== newChannel.name) {
            let newName = new Discord.RichEmbed()
            .setAuthor(oldChannel.guild.name, oldChannel.guild.iconURL)
            .setColor('#ff0000')
            .setDescription(`**${channelType} channel name has been changed **\n**Old Name: \`\`${oldChannel.name}\`\`**\n**New Name: \`\`${newChannel.name}\`\`**\n by : <@${userID}>`)
            .setFooter(`${usertag}`, userAvatar)
            .setTimestamp()
 
            logChannel.send(newName);
        }
    })
});

//channel-Delete
client.on('channelDelete', dc => {
    const channel = dc.guild.channels.find("name", "log")
	
	if(dc.type === 'text') {
        var roomType = ':pencil: #';
    }else
    if(dc.type === 'voice') {
        var roomType = ':microphone: ';
    }else
    if(dc.type === 'category') {
        var roomType = '';
    }
	
	    dc.guild.fetchAuditLogs().then(logs => {
	var userid = logs.entries.first().executor.id;
	var userava = logs.entries.first().executor.avatarURL;
	var usertag = logs.entries.first().executor.tag;

    var embed = new Discord.RichEmbed()
    .setAuthor(dc.guild.name, dc.guild.iconURL)
    .setDescription(`***Channel Deleted Name : *** **${roomType}${dc.name}**\n by : <@${userid}>`)
    .setColor('#ff0000')
    .setFooter(`${usertag}`, userava)
    .setTimestamp();
    channel.sendEmbed(embed)
   })
});

//guild-Member-Add
client.on('guildMemberAdd', member => {

     const join =  member.guild.channels.find("name", "log")
     
    if(!join) return;
      if(join) {
         moment.locale('ar-ly');
         var m = member.user;
        let embed = new Discord.RichEmbed()
        .setColor('SILVER')
        .setThumbnail(m.avatarURL)
        .setAuthor(m.username,m.avatarURL)
	.setDescription(`:arrow_lower_right:<@${member.user.id}> joined the server`)
        .addField(':alarm_clock: Age of account :',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
        .setFooter(`${m.tag}`, m.avatarURL)
	.setTimestamp();
	join.send(embed);          
         
 }
});

//guildMemberRemove
client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find("name", "log")
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
    
	var m = member.user;
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
       .setThumbnail(memberavatar)
       .setColor('BLACK')
       .setDescription(`:arrow_upper_left:  <@${member.user.id}> **Leave From Server**\n\n`)
       .setTimestamp()
       .setFooter(`${m.tag}`, member.user.avatarURL);
     channel.send({embed:embed});
});

//guildMemberUpdate
client.on('guildMemberUpdate', (oldm, newm) => {
	const channel = oldm.guild.channels.find("name", "log")
	if (oldm.roles.size !== newm.roles.size) {
		
    if (oldm.roles.size > newm.roles.size) {
		
	oldm.guild.fetchAuditLogs().then(logs => {
    var userid = logs.entries.first().executor.id;
    var userava = logs.entries.first().executor.avatarURL;
    var usertag = logs.entries.first().executor.tag;
    let dif = oldm.roles.filter(r => !newm.roles.has(r.id)).first()
    
    var embed = new Discord.RichEmbed()
    .setAuthor(oldm.user.tag, oldm.user.avatarURL)
    .setDescription(`**:x: <@${oldm.id}> was removed from the \`\`${dif.name}\`\` role** by : <@${userid}>`)
    .setColor('#ff0000')
    .setFooter(`${usertag}`, userava)
    .setTimestamp();
		
    channel.sendEmbed(embed)
    })
        
    } else if (oldm.roles.size < newm.roles.size) {
	
       
	oldm.guild.fetchAuditLogs().then(logs => {
    var userid = logs.entries.first().executor.id;
    var userava = logs.entries.first().executor.avatarURL;
    var usertag = logs.entries.first().executor.tag;
    let dif = newm.roles.filter(r => !oldm.roles.has(r.id)).first()
    
    var embed = new Discord.RichEmbed()
    .setAuthor(oldm.user.tag, oldm.user.avatarURL)
    .setDescription(`**:white_check_mark:  <@${newm.id}> was given the \`\`${dif.name}\`\` role** by : <@${userid}>`)
    .setColor('#ff0000')
    .setFooter(`${usertag}`, userava)
    .setTimestamp();
    
    channel.sendEmbed(embed)
    })
    }
    }
  if(oldm.guild.owner.id !== newm.guild.owner.id) {
    let newOwner = new Discord.RichEmbed()
    .setAuthor(oldm.guild.name, oldm.guild.iconURL)
    .setColor('#ff0000')
    .setDescription(`:star2: **Server Settings have been updated**\n:x:**OLD:**\n\`\`\`html\n<ownerID:${oldm.user.id}>\`\`\`\n:white_check_mark: **NEW:**\n\`\`\`html\n<ownerID:${newm.user.id}>\`\`\`\nby : `)
    .setFooter(oldm.guild.name, oldm.guild.iconURL)
        .setTimestamp()

    channel.send(newOwner);
}
});

//guildUpdate
client.on('guildUpdate', (oldGuild, newGuild) => {


  var logChannel = oldGuild.channels.find(c => c.name === 'log');
  if(!logChannel) return;

  oldGuild.fetchAuditLogs().then(logs => {
      var userid = logs.entries.first().executor.id;
      var userava = logs.entries.first().executor.avatarURL;
      var usertag = logs.entries.first().executor.tag;

      if(oldGuild.name !== newGuild.name) {
          let guildName = new Discord.RichEmbed()
          .setAuthor(oldGuild.name, oldGuild.iconURL)
          .setColor('#ff0000')
          .setDescription(`:star2: **Server Settings have been updated**\n:x:**OLD:\n\`\`\`html\n<name: ${oldGuild.name}>\`\`\`\n:white_check_mark:**NEW:**\`\`\`html\n<name: ${newGuild.name}>\`\`\`\nby : <@${userid}>`)
          .setFooter(usertag, userava)
          .setTimestamp()

          logChannel.send(guildName)
      }
      if(oldGuild.region !== newGuild.region) {
        let guildRegion = new Discord.RichEmbed()
        .setAuthor(oldGuild.name, oldGuild.iconURL)
        .setColor('#ff0000')
        .setDescription(`:star2: **Server Settings have been updated**\n:x:**OLD:**\n\`\`\`html\n<region: ${oldGuild.region}>\`\`\`\n:white_check_mark:**NEW:**\`\`\`html\n<region: ${newGuild.region}>\`\`\`\nby : <@${userid}>`)
        .setFooter(usertag, userava)
        .setTimestamp()

        logChannel.send(guildRegion);
    }
      if(oldGuild.verificationLevel !== newGuild.verificationLevel) {
          if(oldGuild.verificationLevel === 0) {
              var oldVerLvl = 'Very Easy';
          }else
          if(oldGuild.verificationLevel === 1) {
              var oldVerLvl = 'Easy';
          }else
          if(oldGuild.verificationLevel === 2) {
              var oldVerLvl = 'Medium';
          }else
          if(oldGuild.verificationLevel === 3) {
              var oldVerLvl = 'Hard';
          }else
          if(oldGuild.verificationLevel === 4) {
              var oldVerLvl = 'Very Hard';
          }

          if(newGuild.verificationLevel === 0) {
              var newVerLvl = 'Very Easy';
          }else
          if(newGuild.verificationLevel === 1) {
              var newVerLvl = 'Easy';
          }else
          if(newGuild.verificationLevel === 2) {
              var newVerLvl = 'Medium';
          }else
          if(newGuild.verificationLevel === 3) {
              var newVerLvl = 'Hard';
          }else
          if(newGuild.verificationLevel === 4) {
              var newVerLvl = 'Very Hard';
          }

          let verLog = new Discord.RichEmbed()
          .setAuthor(oldGuild.name, oldGuild.iconURL)
          .setColor('#ff0000')
          .setDescription(`:star2: **Server Settings have been updated**\n:x:**OLD:**\n\`\`\`html\n<verificationLevel: ${oldVerLvl}[${oldGuild.verificationLevel}]>\`\`\`\n:white_check_mark:**NEW:**\`\`\`html\n<verificationLevel: ${oldVerLvl}[${newGuild.verificationLevel}]>\`\`\`\nby : <@${userid}>`)
          .setFooter(usertag, userava)
          .setTimestamp()

          logChannel.send(verLog);
      }
  })
});

//guildBanAdd
client.on('guildBanAdd', (guild, user) => {
 
 
    var logChannel = guild.channels.find("name", "log")
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
	var userid = logs.entries.first().executor.id;
	var userava = logs.entries.first().executor.avatarURL;
	var usertag = logs.entries.first().executor.tag;
 
        if(userID === client.user.id) return;
 
        let banInfo = new Discord.RichEmbed()
        .setAuthor(user.tag, user.avatarURL)
        .setThumbnail(user.avatarURL)
        .setColor('#ff0000')
        .setDescription(`**:airplane: <@${user.id}> banned from the server**\nby : <@${userid}>`)
        .setFooter(`${usertag}`, userava)
	.setTimestamp()
 
        logChannel.send(banInfo);
    })
});

//guildBanRemove
client.on('guildBanRemove', (guild, user) => {
 
    var logChannel = guild.channels.find("name", "log")
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
	var userid = logs.entries.first().executor.id;
	var userava = logs.entries.first().executor.avatarURL;
	var usertag = logs.entries.first().executor.tag;
 
        let unBanInfo = new Discord.RichEmbed()
        .setAuthor(user.tag, user.avatarURL)
        .setThumbnail(user.avatarURL)
        .setColor('#ff0000')
        .setDescription(`**:blue_car: The ban of <@${user.id}> has been removed**\nby : <@${userid}>`)
        .setFooter(`${usertag}`, userava)
		.setTimestamp()
 
        logChannel.send(unBanInfo);
    })
});

//messageDelete
client.on('messageDelete', message => {
 
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = message.guild.channels.find("name", "log")
    if(!logChannel) return;
 
    let messageDelete = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('BLACK')
       .setDescription(`**:wastebasket: Message sent by <@${message.author.id}> deleted in <#${message.channel.id}>**`)
       .addField(`Message: `, `\n\n\`\`\`${message}\`\`\``)
       .setTimestamp()
       .setFooter(`${message.author.tag}`, message.author.avatarURL);
 
    logChannel.send(messageDelete);
});

//messageUpdate
client.on('messageUpdate', (oldMessage, newMessage) => {
 
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === 'dm') return;
    if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = oldMessage.guild.channels.find("name", "log")
    if(!logChannel) return;
 
    if(oldMessage.content.startsWith('https://')) return;
 
    let messageUpdate = new Discord.RichEmbed()
       .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
       .setColor('SILVER')
       .setDescription(`**:pencil2: Message sent by <@${oldMessage.author.id}> edited in <#${oldMessage.channel.id}> **`)
       .addField(`Old: `, `\n\n\`\`\`${oldMessage.cleanContent}\`\`\``)
       .addField(`New: `, `\n\n\`\`\`${newMessage.cleanContent}\`\`\``)
       .setTimestamp()
       .setFooter(oldMessage.author.tag, oldMessage.author.avatarURL);
 
    logChannel.send(messageUpdate);
});

//roleCreate
client.on('roleCreate', rc => {
    const channel = rc.guild.channels.find("name", "log")
	
	    rc.guild.fetchAuditLogs().then(logs => {
	var userid = logs.entries.first().executor.id;
	var userava = logs.entries.first().executor.avatarURL;
	var usertag = logs.entries.first().executor.tag;
	
    var embed = new Discord.RichEmbed()
    .setAuthor(rc.guild.name, rc.guild.iconURL)
    .setDescription(`***Created Role Name : *** **${rc.name}**\n by : <@${userid}>`)
    .setColor('#ff0000')
    .setFooter(`${usertag}`, userava)
    .setTimestamp();
    channel.sendEmbed(embed)
    })
});

//roleUpdate
client.on('roleUpdate', (old, nw) => {
    const channel = old.guild.channels.find("name", "log")
    
    if(old.name !== nw.name) {
        old.guild.fetchAuditLogs().then(logs => {
    var userid = logs.entries.first().executor.id;
    var userava = logs.entries.first().executor.avatarURL;
    var usertag = logs.entries.first().executor.tag;
    
    var embed = new Discord.RichEmbed()
    .setAuthor(old.guild.name, old.guild.iconURL)
    .setDescription(`Role name has been changed \n**Old name: \`\`${old.name}\`\`**\n**New name: \`\`${nw.name}\`\`**\n by : <@${userid}>`)
    .setColor('#ff0000')
    .setFooter(`${usertag}`, userava)
    .setTimestamp();
    channel.sendEmbed(embed)
    })
   }
});

//roleDelete
client.on('roleDelete', rd => {
    const channel = rd.guild.channels.find("name", "log")
	
	    rd.guild.fetchAuditLogs().then(logs => {
	var userid = logs.entries.first().executor.id;
	var userava = logs.entries.first().executor.avatarURL;
	var usertag = logs.entries.first().executor.tag;
	
    var embed = new Discord.RichEmbed()
    .setAuthor(rd.guild.name, rd.guild.iconURL)
    .setDescription(`***Deleted Role Name : *** **${rd.name}**\n by : <@${userid}>`)
    .setColor('#ff0000')
    .setFooter(`${usertag}`, userava)
    .setTimestamp();
    channel.sendEmbed(embed)
    })
});

//voiceStateUpdate
client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
  if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
  if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

  var logChannel = voiceOld.guild.channels.find("name", "log")
  if(!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
    let user = logs.entries.first().executor.tag;
    let userid = logs.entries.first().executor.id;
    let useravatar = logs.entries.first().executor.avatarURL;

// Server Muted Voice
      if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
          let serverMutev = new Discord.RichEmbed()
          .setThumbnail(`http://i8.ae/Rp5g5`)
          .setAuthor(`${voiceOld.user.tag}`, voiceOld.user.avatarURL)
          .setDescription(`:microphone: **${voiceOld} has been muted **By : <@${userid}>`)
          .setFooter(`${user}`, useravatar)
          .setColor('#ff0000')
          .setTimestamp()

          logChannel.send(serverMutev);
      }
// Server UnMuted Voice
      if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
          let serverUnmutev = new Discord.RichEmbed()
          .setThumbnail(`http://i8.ae/iR3rK`)
          .setAuthor(`${voiceOld.user.tag}`, voiceOld.user.avatarURL)
          .setDescription(`:microphone: **${voiceOld} has been unmuted **By : <@${userid}>`)
          .setFooter(`${user}`, useravatar)
          .setColor('#ff0000')
          .setTimestamp()

          logChannel.send(serverUnmutev);
      }
// Server Deafen Voice
      if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
          let serverDeafv = new Discord.RichEmbed()
          .setThumbnail(`http://i8.ae/5dBeC`)
          .setAuthor(`${voiceOld.user.tag}`, voiceOld.user.avatarURL)
          .setDescription(`:mute: **${voiceOld} has been deafen **By : <@${userid}>`)
          .setFooter(`${user}`, useravatar)
          .setColor('#ff0000')
          .setTimestamp()

          logChannel.send(serverDeafv);
      }
// Server UnDeafen Voice
      if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
          let serverUndeafv = new Discord.RichEmbed()
          .setThumbnail(`http://i8.ae/XEgMM`)
          .setAuthor(`${voiceOld.user.tag}`, voiceOld.user.avatarURL)
          .setDescription(`:headphones: **${voiceOld} has been undeafen **By : <@${userid}>`)
          .setFooter(`${user}`, useravatar)
          .setColor('#ff0000')
          .setTimestamp()

          logChannel.send(serverUndeafv);
      }
  })
// Join Voice Channel
  if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
      let voiceJoin = new Discord.RichEmbed()
      .setAuthor(`${voiceOld.user.tag}`, voiceOld.user.avatarURL)
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(`**:arrow_lower_right: <@${voiceOld.id}> has been Join From \`\`${voiceNew.voiceChannel.name}\`\`.**`)
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
      .setColor('#ff0000')
      .setTimestamp()

      logChannel.send(voiceJoin);
  }
// Leave Voice Channel
  if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
      let voiceLeave = new Discord.RichEmbed()
      .setAuthor(`${voiceOld.user.tag}`, voiceOld.user.avatarURL)
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(`**:arrow_upper_left: <@${voiceOld.id}> has been Leave From \`\`${voiceOld.voiceChannel.name}\`\`.**`)
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
      .setColor('#ff0000')
      .setTimestamp()

      logChannel.send(voiceLeave);
  }
});


client.login(process.env.BOT_TOKEN)
