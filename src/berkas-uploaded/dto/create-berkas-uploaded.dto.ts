import { Prisma } from '@prisma/client';

export class CreateBerkasUploadedDto
  implements Prisma.BerkasUploadedCreateInput
{
  berkas_candidate: {
    connect: {
      id: string;
    };
  };
  berkas: {
    connect: {
      id: number;
    };
  };
  file_url: string;
}
