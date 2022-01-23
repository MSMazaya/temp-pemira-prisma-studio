import { JenisCandidate, Prisma, ProgressBerkas } from "@prisma/client";
import { IsNotEmpty } from "class-validator";

export class CreateBerkasCandidateDto
  implements Prisma.BerkasCandidateCreateInput
{
  id?: string;
  name: string;
  jenis_candidate?: JenisCandidate;
  progress: ProgressBerkas;
  BerkasUploaded?: Prisma.BerkasUploadedCreateNestedManyWithoutBerkas_candidateInput;
  @IsNotEmpty()
  nim: string;
  @IsNotEmpty()
  password: string;
}
