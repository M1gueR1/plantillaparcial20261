import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';
import { Post } from 'src/posts/entities/post.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,

    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepo.create({
      ...createUserDto
    });
    return this.userRepo.save(user);
  }

  async createPost(userId: number, createPostDto: CreatePostDto) {
    const user = await this.userRepo.findOneBy({ id: userId });
    const post = this.postRepository.create({
        ...createPostDto,
        user,
    });
    return this.postRepository.save(post);
}


  findAll() {
    return this.userRepo.find({
        relations: ['posts'],
    });
}

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
