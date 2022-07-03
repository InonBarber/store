import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'COMMENTS', timestamps: false })
export class Comment extends Model {
  @Column
  user_id: number;

  @Column
  post_id: number;

  @Column
  content: string;

  @Column
  upload_time: string;
}
