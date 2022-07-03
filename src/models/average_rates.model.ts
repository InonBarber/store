import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'AVERAGE_RATERS', timestamps: false })
export class Average_raters extends Model {
  @Column({ type: DataType.DOUBLE })
  rater_section_1: number;

  @Column({ type: DataType.DOUBLE })
  rater_section_2: number;

  @Column({ type: DataType.DOUBLE })
  rater_section_3: number;
}
