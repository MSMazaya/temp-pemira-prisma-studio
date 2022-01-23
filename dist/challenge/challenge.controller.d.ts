import { ChallengeService } from './challenge.service';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { FindManyChallengeDto } from './dto/find-many-challenge.dto';
import { FindOneChallengeDto } from './dto/find-one-challenge.dto';
export declare class ChallengeController {
    private readonly challengeService;
    constructor(challengeService: ChallengeService);
    create(createChallengeDto: CreateChallengeDto): import(".prisma/client").Prisma.Prisma__ChallengeClient<import(".prisma/client").Challenge>;
    findAll(query: FindManyChallengeDto): import(".prisma/client").PrismaPromise<import(".prisma/client").Challenge[]>;
    findOne(query: FindOneChallengeDto): import(".prisma/client").Prisma.Prisma__ChallengeClient<import(".prisma/client").Challenge>;
    update(id: string, updateChallengeDto: UpdateChallengeDto): import(".prisma/client").Prisma.Prisma__ChallengeClient<import(".prisma/client").Challenge>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ChallengeClient<import(".prisma/client").Challenge>;
}
