import { Prisma, ProgressBerkas } from '@prisma/client';
export declare class CreateBerkasCandidateDto implements Prisma.BerkasCandidateCreateInput {
    progress: ProgressBerkas;
    BerkasUploaded?: Prisma.BerkasUploadedCreateNestedManyWithoutBerkas_candidateInput;
    nim: string;
    password: string;
}
