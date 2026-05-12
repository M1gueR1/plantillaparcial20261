import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
@Injectable()
export class PostsService {

  constructor(
      @InjectRepository(Comment)
      private readonly commentRepository: Repository<Comment>,
    ) {}

  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  async createComment(postId: number, createCommentDto: CreateCommentDto) {
    const post = await this.commentRepository.findOneBy({ id: postId });
    const comment = this.commentRepository.create({
        ...createCommentDto,
        post,
    });
    return this.commentRepository.save(comment);
}

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
