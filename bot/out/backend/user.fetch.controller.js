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
const node_fetch_1 = __importDefault(require("node-fetch"));
const api = process.env.API_URL || "http://localhost:3000";
class Fetcher {
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield node_fetch_1.default(`${api}/users/find/${id}`);
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield node_fetch_1.default(`${api}/users/update/`, {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        });
    }
}
exports.default = new Fetcher();
//# sourceMappingURL=user.fetch.controller.js.map