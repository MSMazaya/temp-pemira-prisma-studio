import { Prisma } from '@prisma/client';
export declare class FindManyPelanggaranDto {
    skip?: number;
    take?: number;
    cursor?: Prisma.PelanggaranWhereUniqueInput;
    where?: Prisma.PelanggaranWhereInput;
    orderBy?: Prisma.PelanggaranOrderByWithRelationInput;
}
