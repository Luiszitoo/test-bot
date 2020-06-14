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
const express_1 = __importDefault(require("express"));
const mongo_user_controller_1 = __importDefault(require("../user/mongo.user.controller"));
const user_validator_1 = __importDefault(require("../user/user.validator"));
const router = express_1.default.Router();
const userController = new mongo_user_controller_1.default();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.json(yield userController.allUsers()); }));
router.post('/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let body = req.body;
    let valid = user_validator_1.default(body);
    if (!valid) {
        res.status(500).json({
            code: 500,
            message: "Invalid user schema"
        });
        return;
    }
    yield userController.saveUser(body);
    res.json(yield userController.allUsers());
}));
router.get('/find/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    if (id.length != 18) {
        res.status(500).json({
            code: 500,
            message: "Invalid id"
        });
        return;
    }
    let found = yield userController.findById(id);
    if (found) {
        res.json(found);
        return;
    }
    res.status(404).json({ code: 404, message: "User not found" });
}));
exports.default = router;
//# sourceMappingURL=users.route.js.map