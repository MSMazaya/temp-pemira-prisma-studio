import { PelanggaranService } from './pelanggaran.service';
import { CreatePelanggaranDto } from './dto/create-pelanggaran.dto';
import { UpdatePelanggaranDto } from './dto/update-pelanggaran.dto';
import { FindManyPelanggaranDto } from './dto/find-many-pelanggaran.dto';
import { FindOnePelanggaranDto } from './dto/find-one-pelanggaran.dto';
export declare class PelanggaranController {
    private readonly pelanggaranService;
    constructor(pelanggaranService: PelanggaranService);
    create(createPelanggaranDto: CreatePelanggaranDto): import(".prisma/client").Prisma.Prisma__PelanggaranClient<import(".prisma/client").Pelanggaran>;
    findAll(query: FindManyPelanggaranDto): import(".prisma/client").PrismaPromise<import(".prisma/client").Pelanggaran[]>;
    findOne(query: FindOnePelanggaranDto): import(".prisma/client").Prisma.Prisma__PelanggaranClient<import(".prisma/client").Pelanggaran>;
    update(id: string, updatePelanggaranDto: UpdatePelanggaranDto): import(".prisma/client").Prisma.Prisma__PelanggaranClient<import(".prisma/client").Pelanggaran>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PelanggaranClient<import(".prisma/client").Pelanggaran>;
}
