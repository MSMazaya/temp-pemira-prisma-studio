"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BerkasUploadedModule = void 0;
const common_1 = require("@nestjs/common");
const berkas_uploaded_service_1 = require("./berkas-uploaded.service");
const berkas_uploaded_controller_1 = require("./berkas-uploaded.controller");
const prisma_service_1 = require("../prisma.service");
let BerkasUploadedModule = class BerkasUploadedModule {
};
BerkasUploadedModule = __decorate([
    (0, common_1.Module)({
        controllers: [berkas_uploaded_controller_1.BerkasUploadedController],
        providers: [berkas_uploaded_service_1.BerkasUploadedService, prisma_service_1.PrismaService],
    })
], BerkasUploadedModule);
exports.BerkasUploadedModule = BerkasUploadedModule;
//# sourceMappingURL=berkas-uploaded.module.js.map