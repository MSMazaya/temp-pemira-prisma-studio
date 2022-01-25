import { Prisma } from "@prisma/client";

export class CreateBerkasAdminDto implements Prisma.BerkasAdminCreateInput {
  nim: string;
  password: string;
}
