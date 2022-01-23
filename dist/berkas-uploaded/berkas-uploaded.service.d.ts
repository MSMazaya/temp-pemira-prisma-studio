import { CreateBerkasUploadedDto } from './dto/create-berkas-uploaded.dto';
import { UpdateBerkasUploadedDto } from './dto/update-berkas-uploaded.dto';
import { PrismaService } from 'prisma.service';
import { FindManyBerkasUploadedDto } from './dto/find-many-berkas-uploaded.dto';
import { FindOneBerkasUploadedDto } from './dto/find-one-berkas-uploaded.dto';
export declare class BerkasUploadedService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createBerkasUploadedDto: CreateBerkasUploadedDto): import(".prisma/client").Prisma.Prisma__BerkasUploadedClient<import(".prisma/client").BerkasUploaded>;
    findAll(query: FindManyBerkasUploadedDto): import(".prisma/client").PrismaPromise<import(".prisma/client").BerkasUploaded[]>;
    findOne(where: FindOneBerkasUploadedDto): import(".prisma/client").Prisma.Prisma__BerkasUploadedClient<import(".prisma/client").BerkasUploaded>;
    update(id: string, data: UpdateBerkasUploadedDto): import(".prisma/client").Prisma.Prisma__BerkasUploadedClient<import(".prisma/client").BerkasUploaded>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__BerkasUploadedClient<import(".prisma/client").BerkasUploaded>;
}
