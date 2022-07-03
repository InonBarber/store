import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Post } from '@nestjs/common';
import { MusiPost } from './post.model';
import { TAGS_TAG_ID_TO_POST_Model } from './tags_tag_id_to_post.model';

@Table({ tableName: 'TAGS', timestamps: false })
export class TagModel extends Model {
  @Column
  tag_group: number;

  @Column
  name: string;

  @BelongsToMany(() => MusiPost, {
    through: () => TAGS_TAG_ID_TO_POST_Model,
  })
  post: MusiPost[];
}
