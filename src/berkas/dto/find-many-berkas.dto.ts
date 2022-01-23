import { Prisma } from '@prisma/client';

export class FindManyBerkasDto {
  skip?: number;
  take?: number;
  cursor?: Prisma.BerkasWhereUniqueInput;
  where?: Prisma.BerkasWhereInput;
  orderBy?: Prisma.BerkasOrderByWithRelationInput;
}
