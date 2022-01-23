import { Prisma } from '@prisma/client';

export class CreateBerkasDto implements Prisma.BerkasCreateInput {
  nama: string;
  BerkasUploaded?: Prisma.BerkasUploadedCreateNestedManyWithoutBerkasInput;
}
