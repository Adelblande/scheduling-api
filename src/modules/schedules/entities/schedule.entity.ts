import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  plate: string;

  @Column({ type: 'datetime' })
  dateIni: Date;

  @Column({ type: 'datetime' })
  dateEnd: Date;

  @Column()
  type: string;

  @Column()
  status: string;
}
