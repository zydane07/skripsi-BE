import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Gender, Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { email, gender, job, name, password } = createUserDto;
      // Validate the `gender` field using the `@IsEnum` decorator
      if (!Object.values(Gender).includes(gender)) {
        throw new Error('Invalid gender');
      }
      const users = await this.prisma.user.create({
        data: {
          email,
          name,
          password: await bcrypt.hash(password, 10),
          gender,
          job,
        },
      });
      return users;
    } catch (error) {
      if (!(error instanceof Prisma.PrismaClientKnownRequestError)) return;
      if (error.code === 'P2002') throw new ConflictException();
    }
  }

  async findAll(email: string) {
    return await this.prisma.user.findMany({
      where: { email },
    });
  }

  async findOne(email: string): Promise<User | undefined> {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
