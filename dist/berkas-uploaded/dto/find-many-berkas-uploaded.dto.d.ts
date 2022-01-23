import { Prisma } from '@prisma/client';
export declare class FindManyBerkasUploadedDto {
    skip?: number;
    take?: number;
    cursor?: Prisma.BerkasUploadedWhereUniqueInput;
    berkas_candidate_id?: string;
    berkas_id?: number;
    orderBy?: Prisma.BerkasUploadedOrderByWithRelationInput;
}
