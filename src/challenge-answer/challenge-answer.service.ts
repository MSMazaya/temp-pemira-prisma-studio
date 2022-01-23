import { Injectable } from '@nestjs/common';
import { CreateChallengeAnswerDto } from './dto/create-challenge-answer.dto';
import { UpdateChallengeAnswerDto } from './dto/update-challenge-answer.dto';
import { PrismaService } from 'prisma.service';
import { FindManyChallengeAnswerDto } from './dto/find-many-challenge-answer.dto';
import { FindOneChallengeAnswerDto } from './dto/find-one-challenge-answer.dto';

@Injectable()
export class ChallengeAnswerService {
  constructor(private prisma: PrismaService) {}

  create(createChallengeAnswerDto: CreateChallengeAnswerDto) {
    return this.prisma.challengeAnswer.create({
      data: createChallengeAnswerDto,
    });
  }

  findAll(query: FindManyChallengeAnswerDto) {
    const { skip, take, cursor, where, orderBy } = query;
    return this.prisma.challengeAnswer.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(where: FindOneChallengeAnswerDto) {
    return this.prisma.challengeAnswer.findUnique({
      where,
    });
  }

  update(id: string, data: UpdateChallengeAnswerDto) {
    return this.prisma.challengeAnswer.update({
      data,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.challengeAnswer.delete({
      where: { id },
    });
  }
}
