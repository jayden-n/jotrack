import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserActivityService {
  constructor(private prismaService: PrismaService) {}
}
