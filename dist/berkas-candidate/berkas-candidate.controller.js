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
exports.BerkasCandidateController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const berkas_candidate_service_1 = require("./berkas-candidate.service");
const create_berkas_candidate_dto_1 = require("./dto/create-berkas-candidate.dto");
const update_berkas_candidate_dto_1 = require("./dto/update-berkas-candidate.dto");
const find_one_berkas_candidate_dto_1 = require("./dto/find-one-berkas-candidate.dto");
const find_many_berkas_candidate_dto_1 = require("./dto/find-many-berkas-candidate.dto");
let BerkasCandidateController = class BerkasCandidateController {
    constructor(berkasCandidateService) {
        this.berkasCandidateService = berkasCandidateService;
    }
    create(createBerkasCandidateDto) {
        return this.berkasCandidateService.create(createBerkasCandidateDto);
    }
    findAll(query) {
        return this.berkasCandidateService.findAll(query);
    }
    findOne(query) {
        return this.berkasCandidateService.findOne(query);
    }
    update(id, updateBerkasCandidateDto) {
        return this.berkasCandidateService.update(id, updateBerkasCandidateDto);
    }
    remove(id) {
        return this.berkasCandidateService.remove(id);
    }
};
__decorate([
    (0, common_2.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_berkas_candidate_dto_1.CreateBerkasCandidateDto]),
    __metadata("design:returntype", void 0)
], BerkasCandidateController.prototype, "create", null);
__decorate([
    (0, common_2.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_berkas_candidate_dto_1.FindManyBerkasCandidateDto]),
    __metadata("design:returntype", void 0)
], BerkasCandidateController.prototype, "findAll", null);
__decorate([
    (0, common_2.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_one_berkas_candidate_dto_1.FindOneBerkasCandidateDto]),
    __metadata("design:returntype", void 0)
], BerkasCandidateController.prototype, "findOne", null);
__decorate([
    (0, common_2.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_berkas_candidate_dto_1.UpdateBerkasCandidateDto]),
    __metadata("design:returntype", void 0)
], BerkasCandidateController.prototype, "update", null);
__decorate([
    (0, common_2.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BerkasCandidateController.prototype, "remove", null);
BerkasCandidateController = __decorate([
    (0, common_2.Controller)('berkas-candidate'),
    __metadata("design:paramtypes", [berkas_candidate_service_1.BerkasCandidateService])
], BerkasCandidateController);
exports.BerkasCandidateController = BerkasCandidateController;
//# sourceMappingURL=berkas-candidate.controller.js.map