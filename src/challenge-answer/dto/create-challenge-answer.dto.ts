import { Prisma } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class CreateChallengeAnswerDto
  implements Prisma.ChallengeAnswerCreateInput
{
  id?: string;
  @IsNotEmpty()
  answer: string;
  created_at?: string | Date;
  @IsNotEmpty()
  challenge: {
    connect: {
      id?: string;
    };
  };
}
