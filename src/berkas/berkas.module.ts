import { Module } from '@nestjs/common';
import { BerkasService } from './berkas.service';
import { BerkasController } from './berkas.controller';
import { PrismaService } from 'prisma.service';

@Module({
  controllers: [BerkasController],
  providers: [BerkasService, PrismaService],
})
export class BerkasModule {}
