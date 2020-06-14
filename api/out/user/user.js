"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    _id: String,
    names: Array
});
exports.default = mongoose_1.model('users', UserSchema);
class User {
    constructor(id, names) {
        this.id = id;
        this.names = names || [];
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map