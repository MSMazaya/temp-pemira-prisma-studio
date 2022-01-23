import { BerkasCandidateService } from './berkas-candidate.service';
import { CreateBerkasCandidateDto } from './dto/create-berkas-candidate.dto';
import { UpdateBerkasCandidateDto } from './dto/update-berkas-candidate.dto';
import { FindOneBerkasCandidateDto } from './dto/find-one-berkas-candidate.dto';
import { FindManyBerkasCandidateDto } from './dto/find-many-berkas-candidate.dto';
export declare class BerkasCandidateController {
    private readonly berkasCandidateService;
    constructor(berkasCandidateService: BerkasCandidateService);
    create(createBerkasCandidateDto: CreateBerkasCandidateDto): import(".prisma/client").Prisma.Prisma__BerkasCandidateClient<import(".prisma/client").BerkasCandidate>;
    findAll(query: FindManyBerkasCandidateDto): import(".prisma/client").PrismaPromise<import(".prisma/client").BerkasCandidate[]>;
    findOne(query: FindOneBerkasCandidateDto): import(".prisma/client").Prisma.Prisma__BerkasCandidateClient<import(".prisma/client").BerkasCandidate>;
    update(id: string, updateBerkasCandidateDto: UpdateBerkasCandidateDto): import(".prisma/client").Prisma.Prisma__BerkasCandidateClient<import(".prisma/client").BerkasCandidate>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__BerkasCandidateClient<import(".prisma/client").BerkasCandidate>;
}
