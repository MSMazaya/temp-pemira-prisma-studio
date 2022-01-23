"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBerkasDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateBerkasDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { nama: { required: true, type: () => String }, BerkasUploaded: { required: false, type: () => Object } };
    }
}
exports.CreateBerkasDto = CreateBerkasDto;
//# sourceMappingURL=create-berkas.dto.js.map