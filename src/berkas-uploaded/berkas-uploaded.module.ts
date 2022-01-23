import { Module } from '@nestjs/common';
import { BerkasUploadedService } from './berkas-uploaded.service';
import { BerkasUploadedController } from './berkas-uploaded.controller';
import { PrismaService } from 'prisma.service';

@Module({
  controllers: [BerkasUploadedController],
  providers: [BerkasUploadedService, PrismaService],
})
export class BerkasUploadedModule {}
