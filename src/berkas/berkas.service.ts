import { Injectable } from '@nestjs/common';
import { CreateBerkasDto } from './dto/create-berkas.dto';
import { UpdateBerkasDto } from './dto/update-berkas.dto';
import { PrismaService } from 'prisma.service';
import { FindManyBerkasDto } from './dto/find-many-berkas.dto';
import { FindOneBerkasDto } from './dto/find-one-berkas.dto';

@Injectable()
export class BerkasService {
  constructor(private prisma: PrismaService) {}

  create(createBerkasDto: CreateBerkasDto) {
    return this.prisma.berkas.create({
      data: createBerkasDto,
    });
  }

  findAll(query: FindManyBerkasDto) {
    const { skip, take, cursor, where, orderBy } = query;
    return this.prisma.berkas.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(where: FindOneBerkasDto) {
    return this.prisma.berkas.findUnique({
      where,
    });
  }

  update(id: number, data: UpdateBerkasDto) {
    return this.prisma.berkas.update({
      data,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.berkas.delete({
      where: { id },
    });
  }
}
