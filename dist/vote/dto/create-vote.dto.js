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
exports.CreateVoteDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateVoteDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => String }, created_at: { required: false, type: () => Object }, voter: { required: true, type: () => ({ connect: { required: true, type: () => ({ id: { required: false, type: () => String }, nim: { required: false, type: () => String }, email_itb: { required: false, type: () => String } }) } }) }, candidate: { required: true, type: () => ({ connect: { required: true, type: () => ({ id: { required: false, type: () => String }, account_id: { required: false, type: () => String } }) } }) } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], CreateVoteDto.prototype, "voter", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], CreateVoteDto.prototype, "candidate", void 0);
exports.CreateVoteDto = CreateVoteDto;
//# sourceMappingURL=create-vote.dto.js.map