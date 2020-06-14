import dotenv from 'dotenv';
import Discord from 'discord.js';
import userFetcher from './backend/user.fetch.controller';

const client = new Discord.Client();

dotenv.config();

client.on('ready', () => console.log(`Logged in as ${client.user.tag}`));

client.on('guildMemberUpdate', async (member, updatedMember) => {

    if (member.nickname == updatedMember.nickname) {
        return;
    }

    let response = await userFetcher.find(member.user.id);
    let json = await response.json();

    if (json.code == 404) {
        json = {
            _id: member.user.id,
            names: [ member.nickname, updatedMember.nickname ]
        };
    } else {
        if (!json.names) {
            json.names = [ member.nickname, updatedMember.nickname ];
        } else {
            json.names.push(updatedMember.nickname);
        }
    }

    let updateResponse = await userFetcher.update(json);
    console.log(await updateResponse.json());

});

client.login(process.env.BOT_TOKEN);