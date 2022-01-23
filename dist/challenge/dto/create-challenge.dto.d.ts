import { Prisma, Progress } from '@prisma/client';
export declare class CreateChallengeDto implements Prisma.ChallengeCreateInput {
    id?: string;
    payload: string;
    progress?: Progress;
    created_at?: string | Date;
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
