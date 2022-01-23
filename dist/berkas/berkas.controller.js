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
exports.BerkasController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const berkas_service_1 = require("./berkas.service");
const create_berkas_dto_1 = require("./dto/create-berkas.dto");
const update_berkas_dto_1 = require("./dto/update-berkas.dto");
const common_2 = require("@nestjs/common");
const find_many_berkas_dto_1 = require("./dto/find-many-berkas.dto");
const find_one_berkas_dto_1 = require("./dto/find-one-berkas.dto");
let BerkasController = class BerkasController {
    constructor(berkasService) {
        this.berkasService = berkasService;
    }
    create(createBerkasDto) {
        return this.berkasService.create(createBerkasDto);
    }
    findAll(query) {
        return this.berkasService.findAll(query);
    }
    findOne(query) {
        return this.berkasService.findOne(query);
    }
    update(id, updateBerkasDto) {
        return this.berkasService.update(id, updateBerkasDto);
    }
    remove(id) {
        return this.berkasService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_berkas_dto_1.CreateBerkasDto]),
    __metadata("design:returntype", void 0)
], BerkasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_berkas_dto_1.FindManyBerkasDto]),
    __metadata("design:returntype", void 0)
], BerkasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_one_berkas_dto_1.FindOneBerkasDto]),
    __metadata("design:returntype", void 0)
], BerkasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_berkas_dto_1.UpdateBerkasDto]),
    __metadata("design:returntype", void 0)
], BerkasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BerkasController.prototype, "remove", null);
BerkasController = __decorate([
    (0, common_1.Controller)('berkas'),
    __metadata("design:paramtypes", [berkas_service_1.BerkasService])
], BerkasController);
exports.BerkasController = BerkasController;
//# sourceMappingURL=berkas.controller.js.map