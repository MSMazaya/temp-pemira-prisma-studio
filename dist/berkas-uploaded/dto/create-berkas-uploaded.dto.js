"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBerkasUploadedDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateBerkasUploadedDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { berkas_candidate: { required: true, type: () => ({ connect: { required: true, type: () => ({ id: { required: true, type: () => String } }) } }) }, berkas: { required: true, type: () => ({ connect: { required: true, type: () => ({ id: { required: true, type: () => Number } }) } }) }, file_url: { required: true, type: () => String } };
    }
}
exports.CreateBerkasUploadedDto = CreateBerkasUploadedDto;
//# sourceMappingURL=create-berkas-uploaded.dto.js.map