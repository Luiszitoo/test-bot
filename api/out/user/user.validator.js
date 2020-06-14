"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validate(object) {
    if (!object) {
        return false;
    }
    let { _id, names } = object;
    if (!_id || !names) {
        return false;
    }
    return true;
}
exports.default = validate;
//# sourceMappingURL=user.validator.js.map