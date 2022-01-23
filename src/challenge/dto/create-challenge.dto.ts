import { Prisma, Progress } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class CreateChallengeDto implements Prisma.ChallengeCreateInput {
  id?: string;
  @IsNotEmpty()
  payload: string;
  progress?: Progress;
  created_at?: string | Date;
  @IsNotEmpty()
  sender: {
    connect: {
      id?: string;
      nim?: string;
      email_itb?: string;
    };
  };
  candidate: {
    connect: {
      id?: string;
      account_id?: string;
    };
  };
  challenge_answer?: Prisma.ChallengeAnswerCreateNestedOneWithoutChallengeInput;
}
