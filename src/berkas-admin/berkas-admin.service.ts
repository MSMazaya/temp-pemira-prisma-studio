import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.service";
import { CreateBerkasAdminDto } from "./dto/create-berkas-admin.dto";
import { FindManyBerkasAdminDto } from "./dto/find-many-berkas-admin.dto";
import { FindOneBerkasAdminDto } from "./dto/find-one-berkas-admin.dto";
import { UpdateBerkasAdminDto } from "./dto/update-berkas-admin.dto";

@Injectable()
export class BerkasAdminService {
  constructor(private prisma: PrismaService) {}

  create(createBerkasAdminDto: CreateBerkasAdminDto) {
    return this.prisma.berkasAdmin.create({
      data: createBerkasAdminDto,
    });
  }

  findAll(query: FindManyBerkasAdminDto) {
    const { skip, take, cursor, nim, password, orderBy } = query;
    return this.prisma.berkasAdmin.findMany({
      skip,
      take,
      cursor,
      where: {
        nim: {
          equals: nim,
        },
        password: {
          equals: password,
        },
      },
      orderBy,
    });
  }

  findOne(id: string) {
    return this.prisma.berkasAdmin.findUnique({
      where: { id },
    });
  }

  update(id: string, data: UpdateBerkasAdminDto) {
    return this.prisma.berkasAdmin.update({
      data,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.berkasAdmin.delete({
      where: { id },
    });
  }
}
