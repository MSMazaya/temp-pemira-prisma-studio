import { Prisma } from "@prisma/client";

export class FindManyBerkasAdminDto {
  skip?: number;
  take?: number;
  cursor?: Prisma.BerkasAdminWhereUniqueInput;
  where?: Prisma.BerkasAdminWhereInput;
  nim?: string;
  password?: string;
  orderBy?: Prisma.BerkasAdminOrderByWithRelationInput;
}
