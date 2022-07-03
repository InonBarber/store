import {
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from '../../models/user.model';
import { TagModel } from '../../models/tag.model';
import { TAGS_TAG_ID_TO_POST_Model } from '../../models/tags_tag_id_to_post.model';
import { IsString } from '@nestjs/class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  poem_lyrics: string;

  melody_file_path: string;

  creator_id: number;

  post_type: number;

  average_rater_id: number;

  average_post_rate: number;
}
