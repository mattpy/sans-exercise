import { Entity, PrimaryGeneratedColumn, Column, Check } from 'typeorm';

enum MovieFormat {
  VHS = 'VHS',
  DVD = 'DVD',
  Streaming = 'Streaming'
}

@Entity()
@Check(`"rating" < 6`)
@Check(`"releaseYear" > 1799 AND "releaseYear" < 2101`)
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 }) // between 1 and 50
  title: string;

  @Column({ type: 'enum', enum: MovieFormat, default: MovieFormat.VHS })
  format: MovieFormat;

  @Column({ type: 'smallint', default: 0, nullable: false }) // between 0 and 500
  length: number;

  @Column({ type: 'smallint' }) // Between 1800 and 2100
  releaseYear: number;

  @Column({ type: 'tinyint' }) // between 1 and 5
  rating: number;
}
