import { Prisma } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class CreatePelanggaranDto implements Prisma.PelanggaranCreateInput {
  id?: string;
  @IsNotEmpty()
  keterangan: string;
  @IsNotEmpty()
  bukti_url: string;
  created_at?: string | Date;
  @IsNotEmpty()
  sender: {
    connect: {
      id?: string;
      nim?: string;
      email_itb?: string;
    };
  };
  @IsNotEmpty()
  candidate: {
    connect: {
      id?: string;
      account_id?: string;
    };
  };
}
