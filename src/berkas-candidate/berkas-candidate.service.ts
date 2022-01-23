import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { CreateBerkasCandidateDto } from './dto/create-berkas-candidate.dto';
import { FindManyBerkasCandidateDto } from './dto/find-many-berkas-candidate.dto';
import { FindOneBerkasCandidateDto } from './dto/find-one-berkas-candidate.dto';
import { UpdateBerkasCandidateDto } from './dto/update-berkas-candidate.dto';

@Injectable()
export class BerkasCandidateService {
  constructor(private prisma: PrismaService) {}

  create(createBerkasCandidateDto: CreateBerkasCandidateDto) {
    return this.prisma.berkasCandidate.create({
      data: createBerkasCandidateDto,
    });
  }

  findAll(query: FindManyBerkasCandidateDto) {
    const { skip, take, cursor, nim, password, orderBy } = query;
    return this.prisma.berkasCandidate.findMany({
      skip,
      take,
      cursor,
      where: { 
        nim,
        password
      },
      orderBy,
    });
  }

  findOne(where: FindOneBerkasCandidateDto) {
    return this.prisma.berkasCandidate.findUnique({
      where,
    });
  }

  update(id: string, data: UpdateBerkasCandidateDto) {
    return this.prisma.berkasCandidate.update({
      data,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.berkasCandidate.delete({
      where: { id },
    });
  }
}
