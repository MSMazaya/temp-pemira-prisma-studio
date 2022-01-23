import { CreateChallengeAnswerDto } from './dto/create-challenge-answer.dto';
import { UpdateChallengeAnswerDto } from './dto/update-challenge-answer.dto';
import { PrismaService } from 'prisma.service';
import { FindManyChallengeAnswerDto } from './dto/find-many-challenge-answer.dto';
import { FindOneChallengeAnswerDto } from './dto/find-one-challenge-answer.dto';
export declare class ChallengeAnswerService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createChallengeAnswerDto: CreateChallengeAnswerDto): import(".prisma/client").Prisma.Prisma__ChallengeAnswerClient<import(".prisma/client").ChallengeAnswer>;
    findAll(query: FindManyChallengeAnswerDto): import(".prisma/client").PrismaPromise<import(".prisma/client").ChallengeAnswer[]>;
    findOne(where: FindOneChallengeAnswerDto): import(".prisma/client").Prisma.Prisma__ChallengeAnswerClient<import(".prisma/client").ChallengeAnswer>;
    update(id: string, data: UpdateChallengeAnswerDto): import(".prisma/client").Prisma.Prisma__ChallengeAnswerClient<import(".prisma/client").ChallengeAnswer>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ChallengeAnswerClient<import(".prisma/client").ChallengeAnswer>;
}
