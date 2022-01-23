import { Prisma } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class CreateCandidateDto implements Prisma.CandidateCreateInput {
  id?: string;
  @IsNotEmpty()
  account: {
    connect: {
      id?: string;
      nim?: string;
      email_itb?: string;
    };
  };
  allenge?: Prisma.ChallengeCreateNestedManyWithoutCandidateInput;
  Pelanggaran?: Prisma.PelanggaranCreateNestedManyWithoutCandidateInput;
  Vote?: Prisma.VoteCreateNestedManyWithoutCandidateInput;
}
