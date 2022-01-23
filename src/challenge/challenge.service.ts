import { Injectable } from '@nestjs/common';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { PrismaService } from 'prisma.service';
import { FindManyChallengeDto } from './dto/find-many-challenge.dto';
import { FindOneChallengeDto } from './dto/find-one-challenge.dto';

@Injectable()
export class ChallengeService {
  constructor(private prisma: PrismaService) {}

  create(createChallengeDto: CreateChallengeDto) {
    return this.prisma.challenge.create({
      data: createChallengeDto,
    });
  }

  findAll(query: FindManyChallengeDto) {
    const { skip, take, cursor, where, orderBy } = query;
    return this.prisma.challenge.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(where: FindOneChallengeDto) {
    return this.prisma.challenge.findUnique({
      where,
    });
  }

  update(id: string, data: UpdateChallengeDto) {
    return this.prisma.challenge.update({
      data,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.challenge.delete({
      where: { id },
    });
  }
}
