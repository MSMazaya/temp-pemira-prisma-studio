import { Prisma } from '@prisma/client';

export class FindManyBerkasCandidateDto {
  skip?: number;
  take?: number;
  cursor?: Prisma.BerkasCandidateWhereUniqueInput;
  where?: Prisma.BerkasCandidateWhereInput;
  nim?: string;
  password?: string;
  orderBy?: Prisma.BerkasCandidateOrderByWithRelationInput;
}
