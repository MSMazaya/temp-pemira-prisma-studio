"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const user_service_1 = require("../user/user.service");
const listAllKeys = (jsoninput) => {
    const listOfKeys = [];
    const queue = [jsoninput];
    while (queue.length !== 0) {
        const currentjson = queue.pop();
        for (const key in currentjson) {
            listOfKeys.push(key);
            if (typeof currentjson[key] === 'object') {
                queue.push(currentjson[key]);
            }
        }
    }
    return listOfKeys;
};
let AuthService = class AuthService {
    constructor(httpService, userService) {
        this.httpService = httpService;
        this.userService = userService;
    }
    loginIna(ticket) {
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map