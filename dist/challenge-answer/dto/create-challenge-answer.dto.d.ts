import { Prisma } from '@prisma/client';
export declare class CreateChallengeAnswerDto implements Prisma.ChallengeAnswerCreateInput {
    id?: string;
    answer: string;
    created_at?: string | Date;
    challenge: {
        connect: {
            id?: string;
        };
    };
}
