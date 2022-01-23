import { Prisma, Role } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateUserDto implements Prisma.UserCreateInput {
  @IsNumberString()
  nim: string;
  @IsEmail()
  email_itb: string;
  @IsEmail()
  email_non_itb: string;
  @IsNotEmpty()
  long_name: string;
  @IsNotEmpty()
  short_name: string;
  @IsNotEmpty()
  fakultas: string;
  role?: Role;
  candidate?: Prisma.CandidateCreateNestedOneWithoutAccountInput;
  Challenge?: Prisma.ChallengeCreateNestedManyWithoutSenderInput;
  Pelanggaran?: Prisma.PelanggaranCreateNestedManyWithoutSenderInput;
  Vote?: Prisma.VoteCreateNestedManyWithoutVoterInput;
}
