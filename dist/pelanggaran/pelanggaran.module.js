"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PelanggaranModule = void 0;
const common_1 = require("@nestjs/common");
const pelanggaran_service_1 = require("./pelanggaran.service");
const pelanggaran_controller_1 = require("./pelanggaran.controller");
const prisma_service_1 = require("../prisma.service");
let PelanggaranModule = class PelanggaranModule {
};
PelanggaranModule = __decorate([
    (0, common_1.Module)({
        controllers: [pelanggaran_controller_1.PelanggaranController],
        providers: [pelanggaran_service_1.PelanggaranService, prisma_service_1.PrismaService],
    })
], PelanggaranModule);
exports.PelanggaranModule = PelanggaranModule;
//# sourceMappingURL=pelanggaran.module.js.map