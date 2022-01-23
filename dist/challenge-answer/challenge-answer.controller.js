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
exports.ChallengeAnswerController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const challenge_answer_service_1 = require("./challenge-answer.service");
const create_challenge_answer_dto_1 = require("./dto/create-challenge-answer.dto");
const update_challenge_answer_dto_1 = require("./dto/update-challenge-answer.dto");
const common_2 = require("@nestjs/common");
const find_many_challenge_answer_dto_1 = require("./dto/find-many-challenge-answer.dto");
const find_one_challenge_answer_dto_1 = require("./dto/find-one-challenge-answer.dto");
let ChallengeAnswerController = class ChallengeAnswerController {
    constructor(challengeAnswerService) {
        this.challengeAnswerService = challengeAnswerService;
    }
    create(createChallengeAnswerDto) {
        return this.challengeAnswerService.create(createChallengeAnswerDto);
    }
    findAll(query) {
        return this.challengeAnswerService.findAll(query);
    }
    findOne(query) {
        return this.challengeAnswerService.findOne(query);
    }
    update(id, updateChallengeAnswerDto) {
        return this.challengeAnswerService.update(id, updateChallengeAnswerDto);
    }
    remove(id) {
        return this.challengeAnswerService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_challenge_answer_dto_1.CreateChallengeAnswerDto]),
    __metadata("design:returntype", void 0)
], ChallengeAnswerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_challenge_answer_dto_1.FindManyChallengeAnswerDto]),
    __metadata("design:returntype", void 0)
], ChallengeAnswerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_one_challenge_answer_dto_1.FindOneChallengeAnswerDto]),
    __metadata("design:returntype", void 0)
], ChallengeAnswerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_challenge_answer_dto_1.UpdateChallengeAnswerDto]),
    __metadata("design:returntype", void 0)
], ChallengeAnswerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChallengeAnswerController.prototype, "remove", null);
ChallengeAnswerController = __decorate([
    (0, common_1.Controller)('challenge-answer'),
    __metadata("design:paramtypes", [challenge_answer_service_1.ChallengeAnswerService])
], ChallengeAnswerController);
exports.ChallengeAnswerController = ChallengeAnswerController;
//# sourceMappingURL=challenge-answer.controller.js.map