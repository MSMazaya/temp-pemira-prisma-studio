import { Prisma, Role } from '@prisma/client';
export declare class CreateUserDto implements Prisma.UserCreateInput {
    nim: string;
    email_itb: string;
    email_non_itb: string;
    long_name: string;
    short_name: string;
    fakultas: string;
    role?: Role;
    candidate?: Prisma.CandidateCreateNestedOneWithoutAccountInput;
    Challenge?: Prisma.ChallengeCreateNestedManyWithoutSenderInput;
    Pelanggaran?: Prisma.PelanggaranCreateNestedManyWithoutSenderInput;
    Vote?: Prisma.VoteCreateNestedManyWithoutVoterInput;
}
