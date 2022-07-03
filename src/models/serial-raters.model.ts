import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'SERIAL_RATERS', timestamps: false })
export class SerialRater extends Model {
  @Column
  poem_rate_section: number;

  @Column
  melody_rate_section: number;

  @Column
  rate_value: number;

  @Column
  post_id: number;

  @Column
  user_id: number;
}
