import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { FindManyCandidateDto } from './dto/find-many-candidate.dto';
import { FindOneCandidateDto } from './dto/find-one-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Injectable()
export class CandidateService {
  constructor(private prisma: PrismaService) {}

  create(createCandidateDto: CreateCandidateDto) {
    return this.prisma.candidate.create({
      data: createCandidateDto,
    });
  }

  findAll(query: FindManyCandidateDto) {
    const { skip, take, cursor, where, orderBy } = query;
    return this.prisma.candidate.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(where: FindOneCandidateDto) {
    return this.prisma.candidate.findUnique({
      where,
    });
  }

  update(id: string, data: UpdateCandidateDto) {
    return this.prisma.candidate.update({
      data,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.candidate.delete({
      where: { id },
    });
  }
}
