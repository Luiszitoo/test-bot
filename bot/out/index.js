"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const discord_js_1 = __importDefault(require("discord.js"));
const user_fetch_controller_1 = __importDefault(require("./backend/user.fetch.controller"));
const client = new discord_js_1.default.Client();
dotenv_1.default.config();
client.on('ready', () => console.log(`Logged in as ${client.user.tag}`));
client.on('guildMemberUpdate', (member, updatedMember) => __awaiter(void 0, void 0, void 0, function* () {
    if (member.nickname == updatedMember.nickname) {
        return;
    }
    let response = yield user_fetch_controller_1.default.find(member.user.id);
    let json = yield response.json();
    if (json.code == 404) {
        json = {
            _id: member.user.id,
            names: [member.nickname, updatedMember.nickname]
        };
    }
    else {
        if (!json.names) {
            json.names = [member.nickname, updatedMember.nickname];
        }
        else {
            json.names.push(updatedMember.nickname);
        }
    }
    let updateResponse = yield user_fetch_controller_1.default.update(json);
    console.log(yield updateResponse.json());
}));
client.login(process.env.BOT_TOKEN);
//# sourceMappingURL=index.js.map