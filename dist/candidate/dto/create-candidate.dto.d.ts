import { Prisma } from '@prisma/client';
export declare class CreateCandidateDto implements Prisma.CandidateCreateInput {
    id?: string;
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
