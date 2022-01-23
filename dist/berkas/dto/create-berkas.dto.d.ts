import { Prisma } from '@prisma/client';
export declare class CreateBerkasDto implements Prisma.BerkasCreateInput {
    nama: string;
    BerkasUploaded?: Prisma.BerkasUploadedCreateNestedManyWithoutBerkasInput;
}
