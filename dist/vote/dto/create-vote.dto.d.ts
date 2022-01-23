import { Prisma } from '@prisma/client';
export declare class CreateVoteDto implements Prisma.VoteCreateInput {
    id?: string;
    created_at?: string | Date;
    voter: {
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
}
