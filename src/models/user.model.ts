import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { MusiPost } from './post.model';

@Table({ tableName: 'USERS', timestamps: false })
export class User extends Model {
  @Column
  user_name: string;

  @Column
  is_admin: string;

  @Column
  user_type: number;

  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column
  average_rate: number;

  @Column
  spotify_url: string;

  @Column
  creation_date: string;

  @HasMany(() => MusiPost, 'creator_id')
  posts: MusiPost[];
}
