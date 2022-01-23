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
exports.CandidateService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let CandidateService = class CandidateService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createCandidateDto) {
        return this.prisma.candidate.create({
            data: createCandidateDto,
        });
    }
    findAll(query) {
        const { skip, take, cursor, where, orderBy } = query;
        return this.prisma.candidate.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    findOne(where) {
        return this.prisma.candidate.findUnique({
            where,
        });
    }
    update(id, data) {
        return this.prisma.candidate.update({
            data,
            where: { id },
        });
    }
    remove(id) {
        return this.prisma.candidate.delete({
            where: { id },
        });
    }
};
CandidateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CandidateService);
exports.CandidateService = CandidateService;
//# sourceMappingURL=candidate.service.js.map