import { Entity, PrimaryGeneratedColumn, Column, Check } from 'typeorm';

enum MovieFormat {
  VHS = 'VHS',
  DVD = 'DVD',
  Streaming = 'Streaming'
}

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, default: '', nullable: false }) // between 1 and 50
  title: string;

  @Column({
    type: 'enum',
    enum: MovieFormat,
    default: MovieFormat.VHS,
    nullable: false
  })
  format: MovieFormat;

  @Column({ type: 'smallint', default: 0, nullable: false }) // between 0 and 500
  length: number;

  @Column({ type: 'smallint', default: 1800, nullable: false }) // Between 1800 and 2100
  releaseYear: number;

  @Column({ type: 'tinyint', default: 1, nullable: false }) // between 1 and 5
  rating: number;
}
