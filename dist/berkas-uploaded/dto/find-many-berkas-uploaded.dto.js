"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBerkasUploadedDto = void 0;
const openapi = require("@nestjs/swagger");
class FindManyBerkasUploadedDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { skip: { required: false, type: () => Number }, take: { required: false, type: () => Number }, cursor: { required: false, type: () => Object }, berkas_candidate_id: { required: false, type: () => String }, berkas_id: { required: false, type: () => Number }, orderBy: { required: false, type: () => Object } };
    }
}
exports.FindManyBerkasUploadedDto = FindManyBerkasUploadedDto;
//# sourceMappingURL=find-many-berkas-uploaded.dto.js.map