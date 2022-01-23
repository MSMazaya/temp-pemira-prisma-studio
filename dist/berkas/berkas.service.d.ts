import { CreateBerkasDto } from './dto/create-berkas.dto';
import { UpdateBerkasDto } from './dto/update-berkas.dto';
import { PrismaService } from 'prisma.service';
import { FindManyBerkasDto } from './dto/find-many-berkas.dto';
import { FindOneBerkasDto } from './dto/find-one-berkas.dto';
export declare class BerkasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createBerkasDto: CreateBerkasDto): import(".prisma/client").Prisma.Prisma__BerkasClient<import(".prisma/client").Berkas>;
    findAll(query: FindManyBerkasDto): import(".prisma/client").PrismaPromise<import(".prisma/client").Berkas[]>;
    findOne(where: FindOneBerkasDto): import(".prisma/client").Prisma.Prisma__BerkasClient<import(".prisma/client").Berkas>;
    update(id: number, data: UpdateBerkasDto): import(".prisma/client").Prisma.Prisma__BerkasClient<import(".prisma/client").Berkas>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__BerkasClient<import(".prisma/client").Berkas>;
}
