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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const challenge_service_1 = require("./challenge.service");
const create_challenge_dto_1 = require("./dto/create-challenge.dto");
const update_challenge_dto_1 = require("./dto/update-challenge.dto");
const common_2 = require("@nestjs/common");
const find_many_challenge_dto_1 = require("./dto/find-many-challenge.dto");
const find_one_challenge_dto_1 = require("./dto/find-one-challenge.dto");
let ChallengeController = class ChallengeController {
    constructor(challengeService) {
        this.challengeService = challengeService;
    }
    create(createChallengeDto) {
        return this.challengeService.create(createChallengeDto);
    }
    findAll(query) {
        return this.challengeService.findAll(query);
    }
    findOne(query) {
        return this.challengeService.findOne(query);
    }
    update(id, updateChallengeDto) {
        return this.challengeService.update(id, updateChallengeDto);
    }
    remove(id) {
        return this.challengeService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_challenge_dto_1.CreateChallengeDto]),
    __metadata("design:returntype", void 0)
], ChallengeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_challenge_dto_1.FindManyChallengeDto]),
    __metadata("design:returntype", void 0)
], ChallengeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_one_challenge_dto_1.FindOneChallengeDto]),
    __metadata("design:returntype", void 0)
], ChallengeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_challenge_dto_1.UpdateChallengeDto]),
    __metadata("design:returntype", void 0)
], ChallengeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChallengeController.prototype, "remove", null);
ChallengeController = __decorate([
    (0, common_1.Controller)('challenge'),
    __metadata("design:paramtypes", [challenge_service_1.ChallengeService])
], ChallengeController);
exports.ChallengeController = ChallengeController;
//# sourceMappingURL=challenge.controller.js.map