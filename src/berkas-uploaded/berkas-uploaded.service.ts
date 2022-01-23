import { Injectable } from '@nestjs/common';
import { CreateBerkasUploadedDto } from './dto/create-berkas-uploaded.dto';
import { UpdateBerkasUploadedDto } from './dto/update-berkas-uploaded.dto';
import { PrismaService } from 'prisma.service';
import { FindManyBerkasUploadedDto } from './dto/find-many-berkas-uploaded.dto';
import { FindOneBerkasUploadedDto } from './dto/find-one-berkas-uploaded.dto';

@Injectable()
export class BerkasUploadedService {
  constructor(private prisma: PrismaService) {}

  create(createBerkasUploadedDto: CreateBerkasUploadedDto) {
    return this.prisma.berkasUploaded.create({
      data: createBerkasUploadedDto,
    });
  }

  findAll(query: FindManyBerkasUploadedDto) {
    const { skip, take, cursor, berkas_id, berkas_candidate_id, orderBy } =
      query;
    return this.prisma.berkasUploaded.findMany({
      skip,
      take,
      cursor,
      where: {
        berkas_id: berkas_id ? Number(berkas_id) : undefined,
        berkas_candidate_id,
      },
      orderBy,
    });
  }

  findOne(where: FindOneBerkasUploadedDto) {
    return this.prisma.berkasUploaded.findUnique({
      where,
    });
  }

  update(id: string, data: UpdateBerkasUploadedDto) {
    return this.prisma.berkasUploaded.update({
      data,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.berkasUploaded.delete({
      where: { id },
    });
  }
}
