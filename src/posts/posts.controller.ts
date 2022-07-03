import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from '../shared/dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getPosts() {
    return { statusCode: 200, data: await this.postsService.getPosts() };
  }

  @Get(':id')
  async getPost(@Param('id') id: number) {
    return { statusCode: 200, data: await this.postsService.getPost(id) };
  }

  @Post('create')
  async createPost(@Body() createPost: CreatePostDto) {
    return {
      statusCode: 200,
      data: await this.postsService.createPost(createPost),
    };
  }
}
