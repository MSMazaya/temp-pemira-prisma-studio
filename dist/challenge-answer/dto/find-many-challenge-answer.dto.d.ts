import { Prisma } from '@prisma/client';
export declare class FindManyChallengeAnswerDto {
    skip?: number;
    take?: number;
    cursor?: Prisma.ChallengeAnswerWhereUniqueInput;
    where?: Prisma.ChallengeAnswerWhereInput;
    orderBy?: Prisma.ChallengeAnswerOrderByWithRelationInput;
}
