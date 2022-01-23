import { Prisma } from '@prisma/client';
export declare class FindManyChallengeDto {
    skip?: number;
    take?: number;
    cursor?: Prisma.ChallengeWhereUniqueInput;
    where?: Prisma.ChallengeWhereInput;
    orderBy?: Prisma.ChallengeOrderByWithRelationInput;
}
