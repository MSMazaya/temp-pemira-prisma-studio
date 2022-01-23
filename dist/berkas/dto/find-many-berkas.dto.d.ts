import { Prisma } from '@prisma/client';
export declare class FindManyBerkasDto {
    skip?: number;
    take?: number;
    cursor?: Prisma.BerkasWhereUniqueInput;
    where?: Prisma.BerkasWhereInput;
    orderBy?: Prisma.BerkasOrderByWithRelationInput;
}
