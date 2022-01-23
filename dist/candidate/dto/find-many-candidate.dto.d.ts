import { Prisma } from '@prisma/client';
export declare class FindManyCandidateDto {
    skip?: number;
    take?: number;
    cursor?: Prisma.CandidateWhereUniqueInput;
    where?: Prisma.CandidateWhereInput;
    orderBy?: Prisma.CandidateOrderByWithRelationInput;
}
