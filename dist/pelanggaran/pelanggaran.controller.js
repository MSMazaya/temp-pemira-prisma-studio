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
exports.PelanggaranController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const pelanggaran_service_1 = require("./pelanggaran.service");
const create_pelanggaran_dto_1 = require("./dto/create-pelanggaran.dto");
const update_pelanggaran_dto_1 = require("./dto/update-pelanggaran.dto");
const common_2 = require("@nestjs/common");
const find_many_pelanggaran_dto_1 = require("./dto/find-many-pelanggaran.dto");
const find_one_pelanggaran_dto_1 = require("./dto/find-one-pelanggaran.dto");
let PelanggaranController = class PelanggaranController {
    constructor(pelanggaranService) {
        this.pelanggaranService = pelanggaranService;
    }
    create(createPelanggaranDto) {
        return this.pelanggaranService.create(createPelanggaranDto);
    }
    findAll(query) {
        return this.pelanggaranService.findAll(query);
    }
    findOne(query) {
        return this.pelanggaranService.findOne(query);
    }
    update(id, updatePelanggaranDto) {
        return this.pelanggaranService.update(id, updatePelanggaranDto);
    }
    remove(id) {
        return this.pelanggaranService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pelanggaran_dto_1.CreatePelanggaranDto]),
    __metadata("design:returntype", void 0)
], PelanggaranController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_pelanggaran_dto_1.FindManyPelanggaranDto]),
    __metadata("design:returntype", void 0)
], PelanggaranController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_one_pelanggaran_dto_1.FindOnePelanggaranDto]),
    __metadata("design:returntype", void 0)
], PelanggaranController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pelanggaran_dto_1.UpdatePelanggaranDto]),
    __metadata("design:returntype", void 0)
], PelanggaranController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PelanggaranController.prototype, "remove", null);
PelanggaranController = __decorate([
    (0, common_1.Controller)('pelanggaran'),
    __metadata("design:paramtypes", [pelanggaran_service_1.PelanggaranService])
], PelanggaranController);
exports.PelanggaranController = PelanggaranController;
//# sourceMappingURL=pelanggaran.controller.js.map