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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BerkasUploadedService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let BerkasUploadedService = class BerkasUploadedService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createBerkasUploadedDto) {
        return this.prisma.berkasUploaded.create({
            data: createBerkasUploadedDto,
        });
    }
    findAll(query) {
        const { skip, take, cursor, berkas_id, berkas_candidate_id, orderBy } = query;
        return this.prisma.berkasUploaded.findMany({
            skip,
            take,
            cursor,
            where: {
                berkas_id: berkas_id ? Number(berkas_id) : undefined,
                berkas_candidate_id,
            },
            orderBy,
        });
    }
    findOne(where) {
        return this.prisma.berkasUploaded.findUnique({
            where,
        });
    }
    update(id, data) {
        return this.prisma.berkasUploaded.update({
            data,
            where: { id },
        });
    }
    remove(id) {
        return this.prisma.berkasUploaded.delete({
            where: { id },
        });
    }
};
BerkasUploadedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BerkasUploadedService);
exports.BerkasUploadedService = BerkasUploadedService;
//# sourceMappingURL=berkas-uploaded.service.js.map