import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma-clients/jobber-auth';
import { PrismaService } from '../prisma/prisma.service';
import { hash } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly PrismaService: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    return this.PrismaService.user.create({
      data: {
        ...data,
        password: await hash(data.password, 12),
      },
    });
  }

  async getUsers() {
    return this.PrismaService.user.findMany();
  }

  async getUser(args: Prisma.UserWhereUniqueInput) {
    return this.PrismaService.user.findUniqueOrThrow({
      where: args,
    });
  }
}
