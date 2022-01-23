import { Injectable } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { PrismaService } from 'prisma.service';
import { FindManyVoteDto } from './dto/find-many-vote.dto';
import { FindOneVoteDto } from './dto/find-one-vote.dto';

@Injectable()
export class VoteService {
  constructor(private prisma: PrismaService) {}

  create(createVoteDto: CreateVoteDto) {
    return this.prisma.vote.create({
      data: createVoteDto,
    });
  }

  findAll(query: FindManyVoteDto) {
    const { skip, take, cursor, where, orderBy } = query;
    return this.prisma.vote.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(where: FindOneVoteDto) {
    return this.prisma.vote.findUnique({
      where,
    });
  }

  update(id: string, data: UpdateVoteDto) {
    return this.prisma.vote.update({
      data,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.vote.delete({
      where: { id },
    });
  }
}
