import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { TagModel } from './tag.model';
import { MusiPost } from './post.model';

@Table({ tableName: 'TAGS_TAG_ID_TO_POST', timestamps: false })
export class TAGS_TAG_ID_TO_POST_Model extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => MusiPost)
  // @Column
  post_id: number;

  @ForeignKey(() => TagModel)
  // @Column
  tag_id: number;
}
