import { Prisma } from '@prisma/client';

export class FindManyBerkasCandidateDto {
  skip?: number;
  take?: number;
  cursor?: Prisma.BerkasCandidateWhereUniqueInput;
  where?: Prisma.BerkasCandidateWhereInput;
  orderBy?: Prisma.BerkasCandidateOrderByWithRelationInput;
}
