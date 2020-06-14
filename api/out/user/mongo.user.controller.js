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
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./user"));
const user_2 = require("./user");
class MongoUserController {
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield mongoose_1.default.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/testbot", {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let document = yield user_1.default.findById(id);
            if (!document) {
                return Promise.resolve(null);
            }
            return Promise.resolve(new user_2.User(document._id, document.names));
        });
    }
    allUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            let documents = yield user_1.default.find({});
            return Promise.resolve(documents.map(document => new user_2.User(document._id, document.names)));
        });
    }
    saveUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let document = new user_1.default({
                _id: user.id,
                names: user.names
            });
            yield document.save();
            return Promise.resolve(undefined);
        });
    }
}
exports.default = MongoUserController;
//# sourceMappingURL=mongo.user.controller.js.map