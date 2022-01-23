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
exports.ChallengeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ChallengeService = class ChallengeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createChallengeDto) {
        return this.prisma.challenge.create({
            data: createChallengeDto,
        });
    }
    findAll(query) {
        const { skip, take, cursor, where, orderBy } = query;
        return this.prisma.challenge.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    findOne(where) {
        return this.prisma.challenge.findUnique({
            where,
        });
    }
    update(id, data) {
        return this.prisma.challenge.update({
            data,
            where: { id },
        });
    }
    remove(id) {
        return this.prisma.challenge.delete({
            where: { id },
        });
    }
};
ChallengeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChallengeService);
exports.ChallengeService = ChallengeService;
//# sourceMappingURL=challenge.service.js.map