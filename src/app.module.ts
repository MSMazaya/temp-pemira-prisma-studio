import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ChallengeModule } from './challenge/challenge.module';
import { CandidateModule } from './candidate/candidate.module';
import { ChallengeAnswerModule } from './challenge-answer/challenge-answer.module';
import { PelanggaranModule } from './pelanggaran/pelanggaran.module';
import { VoteModule } from './vote/vote.module';
// import { AuthModule } from './auth/auth.module';
import { BerkasModule } from './berkas/berkas.module';
import { BerkasUploadedModule } from './berkas-uploaded/berkas-uploaded.module';
import { BerkasCandidateModule } from 'berkas-candidate/berkas-candidate.module';
import { BerkasAdminModule } from './berkas-admin/berkas-admin.module';

@Module({
  imports: [
    UserModule,
    ChallengeModule,
    CandidateModule,
    ChallengeAnswerModule,
    PelanggaranModule,
    VoteModule,
    BerkasCandidateModule,
    BerkasModule,
    BerkasUploadedModule,
    BerkasAdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
