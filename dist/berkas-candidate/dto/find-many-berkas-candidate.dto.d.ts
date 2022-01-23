import { Prisma } from '@prisma/client';
export declare class FindManyBerkasCandidateDto {
    skip?: number;
    take?: number;
    cursor?: Prisma.BerkasCandidateWhereUniqueInput;
    where?: Prisma.BerkasCandidateWhereInput;
    nim?: string;
    password?: string;
    orderBy?: Prisma.BerkasCandidateOrderByWithRelationInput;
}
