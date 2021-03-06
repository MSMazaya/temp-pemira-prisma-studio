import { Prisma } from '@prisma/client';
export declare class FindManyVoteDto {
    skip?: number;
    take?: number;
    cursor?: Prisma.VoteWhereUniqueInput;
    where?: Prisma.VoteWhereInput;
    orderBy?: Prisma.VoteOrderByWithRelationInput;
}
