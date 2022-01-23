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
exports.BerkasUploadedController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const berkas_uploaded_service_1 = require("./berkas-uploaded.service");
const create_berkas_uploaded_dto_1 = require("./dto/create-berkas-uploaded.dto");
const update_berkas_uploaded_dto_1 = require("./dto/update-berkas-uploaded.dto");
const common_2 = require("@nestjs/common");
const find_many_berkas_uploaded_dto_1 = require("./dto/find-many-berkas-uploaded.dto");
const find_one_berkas_uploaded_dto_1 = require("./dto/find-one-berkas-uploaded.dto");
let BerkasUploadedController = class BerkasUploadedController {
    constructor(berkasUploadedService) {
        this.berkasUploadedService = berkasUploadedService;
    }
    create(createBerkasUploadedDto) {
        return this.berkasUploadedService.create(createBerkasUploadedDto);
    }
    findAll(query) {
        return this.berkasUploadedService.findAll(query);
    }
    findOne(query) {
        return this.berkasUploadedService.findOne(query);
    }
    update(id, updateBerkasUploadedDto) {
        return this.berkasUploadedService.update(id, updateBerkasUploadedDto);
    }
    remove(id) {
        return this.berkasUploadedService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_berkas_uploaded_dto_1.CreateBerkasUploadedDto]),
    __metadata("design:returntype", void 0)
], BerkasUploadedController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_berkas_uploaded_dto_1.FindManyBerkasUploadedDto]),
    __metadata("design:returntype", void 0)
], BerkasUploadedController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_one_berkas_uploaded_dto_1.FindOneBerkasUploadedDto]),
    __metadata("design:returntype", void 0)
], BerkasUploadedController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_berkas_uploaded_dto_1.UpdateBerkasUploadedDto]),
    __metadata("design:returntype", void 0)
], BerkasUploadedController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BerkasUploadedController.prototype, "remove", null);
BerkasUploadedController = __decorate([
    (0, common_1.Controller)('berkas-uploaded'),
    __metadata("design:paramtypes", [berkas_uploaded_service_1.BerkasUploadedService])
], BerkasUploadedController);
exports.BerkasUploadedController = BerkasUploadedController;
//# sourceMappingURL=berkas-uploaded.controller.js.map