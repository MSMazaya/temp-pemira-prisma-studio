import { Module } from "@nestjs/common";
import { BerkasAdminService } from "./berkas-admin.service";
import { BerkasAdminController } from "./berkas-admin.controller";
import { PrismaService } from "prisma.service";

@Module({
  controllers: [BerkasAdminController],
  providers: [BerkasAdminService, PrismaService],
})
export class BerkasAdminModule {}
