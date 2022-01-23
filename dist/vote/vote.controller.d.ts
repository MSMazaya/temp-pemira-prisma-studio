import { VoteService } from './vote.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { FindManyVoteDto } from './dto/find-many-vote.dto';
import { FindOneVoteDto } from './dto/find-one-vote.dto';
export declare class VoteController {
    private readonly voteService;
    constructor(voteService: VoteService);
    create(createVoteDto: CreateVoteDto): import(".prisma/client").Prisma.Prisma__VoteClient<import(".prisma/client").Vote>;
    findAll(query: FindManyVoteDto): import(".prisma/client").PrismaPromise<import(".prisma/client").Vote[]>;
    findOne(query: FindOneVoteDto): import(".prisma/client").Prisma.Prisma__VoteClient<import(".prisma/client").Vote>;
    update(id: string, updateVoteDto: UpdateVoteDto): import(".prisma/client").Prisma.Prisma__VoteClient<import(".prisma/client").Vote>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__VoteClient<import(".prisma/client").Vote>;
}
