import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { PrismaService } from 'prisma.service';
import { FindManyVoteDto } from './dto/find-many-vote.dto';
import { FindOneVoteDto } from './dto/find-one-vote.dto';
export declare class VoteService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createVoteDto: CreateVoteDto): import(".prisma/client").Prisma.Prisma__VoteClient<import(".prisma/client").Vote>;
    findAll(query: FindManyVoteDto): import(".prisma/client").PrismaPromise<import(".prisma/client").Vote[]>;
    findOne(where: FindOneVoteDto): import(".prisma/client").Prisma.Prisma__VoteClient<import(".prisma/client").Vote>;
    update(id: string, data: UpdateVoteDto): import(".prisma/client").Prisma.Prisma__VoteClient<import(".prisma/client").Vote>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__VoteClient<import(".prisma/client").Vote>;
}
