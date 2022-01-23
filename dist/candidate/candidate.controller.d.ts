import { CandidateService } from './candidate.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { FindManyCandidateDto } from './dto/find-many-candidate.dto';
import { FindOneCandidateDto } from './dto/find-one-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
export declare class CandidateController {
    private readonly candidateService;
    constructor(candidateService: CandidateService);
    create(createCandidateDto: CreateCandidateDto): import(".prisma/client").Prisma.Prisma__CandidateClient<import(".prisma/client").Candidate>;
    findAll(query: FindManyCandidateDto): import(".prisma/client").PrismaPromise<import(".prisma/client").Candidate[]>;
    findOne(query: FindOneCandidateDto): import(".prisma/client").Prisma.Prisma__CandidateClient<import(".prisma/client").Candidate>;
    update(id: string, updateCandidateDto: UpdateCandidateDto): import(".prisma/client").Prisma.Prisma__CandidateClient<import(".prisma/client").Candidate>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CandidateClient<import(".prisma/client").Candidate>;
}
