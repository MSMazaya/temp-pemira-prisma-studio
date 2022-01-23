import { Prisma } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class CreateVoteDto implements Prisma.VoteCreateInput {
  id?: string;
  created_at?: string | Date;
  @IsNotEmpty()
  voter: {
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
