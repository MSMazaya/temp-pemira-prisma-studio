import { Prisma } from '@prisma/client';
export declare class CreatePelanggaranDto implements Prisma.PelanggaranCreateInput {
    id?: string;
    keterangan: string;
    bukti_url: string;
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
}
