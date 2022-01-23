import { ChallengeAnswerService } from './challenge-answer.service';
import { CreateChallengeAnswerDto } from './dto/create-challenge-answer.dto';
import { UpdateChallengeAnswerDto } from './dto/update-challenge-answer.dto';
import { FindManyChallengeAnswerDto } from './dto/find-many-challenge-answer.dto';
import { FindOneChallengeAnswerDto } from './dto/find-one-challenge-answer.dto';
export declare class ChallengeAnswerController {
    private readonly challengeAnswerService;
    constructor(challengeAnswerService: ChallengeAnswerService);
    create(createChallengeAnswerDto: CreateChallengeAnswerDto): import(".prisma/client").Prisma.Prisma__ChallengeAnswerClient<import(".prisma/client").ChallengeAnswer>;
    findAll(query: FindManyChallengeAnswerDto): import(".prisma/client").PrismaPromise<import(".prisma/client").ChallengeAnswer[]>;
    findOne(query: FindOneChallengeAnswerDto): import(".prisma/client").Prisma.Prisma__ChallengeAnswerClient<import(".prisma/client").ChallengeAnswer>;
    update(id: string, updateChallengeAnswerDto: UpdateChallengeAnswerDto): import(".prisma/client").Prisma.Prisma__ChallengeAnswerClient<import(".prisma/client").ChallengeAnswer>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ChallengeAnswerClient<import(".prisma/client").ChallengeAnswer>;
}
