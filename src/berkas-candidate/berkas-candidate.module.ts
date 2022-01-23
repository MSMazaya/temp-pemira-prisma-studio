import { Module } from '@nestjs/common';
import { BerkasCandidateService } from './berkas-candidate.service';
import { BerkasCandidateController } from './berkas-candidate.controller';
import { PrismaService } from 'prisma.service';

@Module({
  controllers: [BerkasCandidateController],
  providers: [BerkasCandidateService, PrismaService],
})
export class BerkasCandidateModule {}
