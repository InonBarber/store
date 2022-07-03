import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Average_raters } from '../models/average_rates.model';
import { MusiPost } from '../models/post.model';
import { User } from '../models/user.model';
import { Comment } from '../models/comment.model';
import { SerialRater } from '../models/serial-raters.model';
import { TagModel } from '../models/tag.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Average_raters,
      MusiPost,
      User,
      Comment,
      SerialRater,
      TagModel,
    ]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
