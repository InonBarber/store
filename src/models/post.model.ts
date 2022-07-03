import {
  AllowNull,
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { TagModel } from './tag.model';
import { TAGS_TAG_ID_TO_POST_Model } from './tags_tag_id_to_post.model';
import { User } from './user.model';

@Table({ tableName: 'POSTS', timestamps: false })
export class MusiPost extends Model {
  @AllowNull(false)
  @Column
  title: string;

  @Column
  poem_lyrics: string;

  @Column
  melody_file_path: string;

  @Column
  @ForeignKey(() => User)
  creator_id: number;

  @Column
  post_type: number;

  @Column
  average_rater_id: number;

  @Column
  average_post_rate: number;

  @BelongsToMany(() => TagModel, {
    through: () => TAGS_TAG_ID_TO_POST_Model,
    foreignKey: 'post_id',
  })
  tags: TagModel[];

  @BelongsTo(() => User)
  user: User;
}
