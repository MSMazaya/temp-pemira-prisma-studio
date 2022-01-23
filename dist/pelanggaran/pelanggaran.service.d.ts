import { CreatePelanggaranDto } from './dto/create-pelanggaran.dto';
import { UpdatePelanggaranDto } from './dto/update-pelanggaran.dto';
import { PrismaService } from 'prisma.service';
import { FindManyPelanggaranDto } from './dto/find-many-pelanggaran.dto';
import { FindOnePelanggaranDto } from './dto/find-one-pelanggaran.dto';
export declare class PelanggaranService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPelanggaranDto: CreatePelanggaranDto): import(".prisma/client").Prisma.Prisma__PelanggaranClient<import(".prisma/client").Pelanggaran>;
    findAll(query: FindManyPelanggaranDto): import(".prisma/client").PrismaPromise<import(".prisma/client").Pelanggaran[]>;
    findOne(where: FindOnePelanggaranDto): import(".prisma/client").Prisma.Prisma__PelanggaranClient<import(".prisma/client").Pelanggaran>;
    update(id: string, data: UpdatePelanggaranDto): import(".prisma/client").Prisma.Prisma__PelanggaranClient<import(".prisma/client").Pelanggaran>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PelanggaranClient<import(".prisma/client").Pelanggaran>;
}
