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
exports.CandidateController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const candidate_service_1 = require("./candidate.service");
const create_candidate_dto_1 = require("./dto/create-candidate.dto");
const find_many_candidate_dto_1 = require("./dto/find-many-candidate.dto");
const find_one_candidate_dto_1 = require("./dto/find-one-candidate.dto");
const update_candidate_dto_1 = require("./dto/update-candidate.dto");
let CandidateController = class CandidateController {
    constructor(candidateService) {
        this.candidateService = candidateService;
    }
    create(createCandidateDto) {
        return this.candidateService.create(createCandidateDto);
    }
    findAll(query) {
        return this.candidateService.findAll(query);
    }
    findOne(query) {
        return this.candidateService.findOne(query);
    }
    update(id, updateCandidateDto) {
        return this.candidateService.update(id, updateCandidateDto);
    }
    remove(id) {
        return this.candidateService.remove(id);
    }
};
__decorate([
    (0, common_2.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_candidate_dto_1.CreateCandidateDto]),
    __metadata("design:returntype", void 0)
], CandidateController.prototype, "create", null);
__decorate([
    (0, common_2.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_candidate_dto_1.FindManyCandidateDto]),
    __metadata("design:returntype", void 0)
], CandidateController.prototype, "findAll", null);
__decorate([
    (0, common_2.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_one_candidate_dto_1.FindOneCandidateDto]),
    __metadata("design:returntype", void 0)
], CandidateController.prototype, "findOne", null);
__decorate([
    (0, common_2.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_candidate_dto_1.UpdateCandidateDto]),
    __metadata("design:returntype", void 0)
], CandidateController.prototype, "update", null);
__decorate([
    (0, common_2.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CandidateController.prototype, "remove", null);
CandidateController = __decorate([
    (0, common_2.Controller)('candidate'),
    __metadata("design:paramtypes", [candidate_service_1.CandidateService])
], CandidateController);
exports.CandidateController = CandidateController;
//# sourceMappingURL=candidate.controller.js.map