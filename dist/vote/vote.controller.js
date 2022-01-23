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
exports.VoteController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const vote_service_1 = require("./vote.service");
const create_vote_dto_1 = require("./dto/create-vote.dto");
const update_vote_dto_1 = require("./dto/update-vote.dto");
const common_2 = require("@nestjs/common");
const find_many_vote_dto_1 = require("./dto/find-many-vote.dto");
const find_one_vote_dto_1 = require("./dto/find-one-vote.dto");
let VoteController = class VoteController {
    constructor(voteService) {
        this.voteService = voteService;
    }
    create(createVoteDto) {
        return this.voteService.create(createVoteDto);
    }
    findAll(query) {
        return this.voteService.findAll(query);
    }
    findOne(query) {
        return this.voteService.findOne(query);
    }
    update(id, updateVoteDto) {
        return this.voteService.update(id, updateVoteDto);
    }
    remove(id) {
        return this.voteService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vote_dto_1.CreateVoteDto]),
    __metadata("design:returntype", void 0)
], VoteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_vote_dto_1.FindManyVoteDto]),
    __metadata("design:returntype", void 0)
], VoteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_one_vote_dto_1.FindOneVoteDto]),
    __metadata("design:returntype", void 0)
], VoteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vote_dto_1.UpdateVoteDto]),
    __metadata("design:returntype", void 0)
], VoteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VoteController.prototype, "remove", null);
VoteController = __decorate([
    (0, common_1.Controller)('vote'),
    __metadata("design:paramtypes", [vote_service_1.VoteService])
], VoteController);
exports.VoteController = VoteController;
//# sourceMappingURL=vote.controller.js.map