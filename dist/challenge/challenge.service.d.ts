import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { PrismaService } from 'prisma.service';
import { FindManyChallengeDto } from './dto/find-many-challenge.dto';
import { FindOneChallengeDto } from './dto/find-one-challenge.dto';
export declare class ChallengeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createChallengeDto: CreateChallengeDto): import(".prisma/client").Prisma.Prisma__ChallengeClient<import(".prisma/client").Challenge>;
    findAll(query: FindManyChallengeDto): import(".prisma/client").PrismaPromise<import(".prisma/client").Challenge[]>;
    findOne(where: FindOneChallengeDto): import(".prisma/client").Prisma.Prisma__ChallengeClient<import(".prisma/client").Challenge>;
    update(id: string, data: UpdateChallengeDto): import(".prisma/client").Prisma.Prisma__ChallengeClient<import(".prisma/client").Challenge>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ChallengeClient<import(".prisma/client").Challenge>;
}
