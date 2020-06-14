"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
// routes
const users_route_1 = __importDefault(require("./route/users.route"));
dotenv_1.default.config();
const app = express_1.default();
app.set('port', process.env.PORT || 3000);
app.use(body_parser_1.default.json());
app.use(morgan_1.default('dev'));
app.use('/users', users_route_1.default);
app.listen(app.get('port'));
//# sourceMappingURL=index.js.map