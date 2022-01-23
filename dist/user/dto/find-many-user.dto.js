"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyUserDto = void 0;
const openapi = require("@nestjs/swagger");
class FindManyUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { skip: { required: false, type: () => Number }, take: { required: false, type: () => Number }, cursor: { required: false, type: () => Object }, where: { required: false, type: () => Object }, orderBy: { required: false, type: () => Object } };
    }
}
exports.FindManyUserDto = FindManyUserDto;
//# sourceMappingURL=find-many-user.dto.js.map