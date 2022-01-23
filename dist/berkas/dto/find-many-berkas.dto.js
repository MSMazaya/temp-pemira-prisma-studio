"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBerkasDto = void 0;
const openapi = require("@nestjs/swagger");
class FindManyBerkasDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { skip: { required: false, type: () => Number }, take: { required: false, type: () => Number }, cursor: { required: false, type: () => Object }, where: { required: false, type: () => Object }, orderBy: { required: false, type: () => Object } };
    }
}
exports.FindManyBerkasDto = FindManyBerkasDto;
//# sourceMappingURL=find-many-berkas.dto.js.map