import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Average_raters } from './models/average_rates.model';
import { MusiPost } from './models/post.model';
import { User } from './models/user.model';
import { Comment } from './models/comment.model';
import { SerialRater } from './models/serial-raters.model';
import { TagModel } from './models/tag.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Average_raters) private AverageRaters: typeof Average_raters,
    @InjectModel(MusiPost) private MusiPosts: typeof MusiPost,
    @InjectModel(User) private Users: typeof User,
    @InjectModel(Comment) private Comments: typeof Comment,
    @InjectModel(SerialRater) private SerialRaters: typeof SerialRater,
    @InjectModel(TagModel) private TagModels: typeof TagModel,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getRaters() {
    return this.TagModels.findOne();
  }
}
