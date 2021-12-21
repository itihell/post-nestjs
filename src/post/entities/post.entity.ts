import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'text', nullable: false })
  slug!: string;
  @Column({ type: 'varchar', length: 150 })
  title!: string;
  @Column({ type: 'varchar', length: 255 })
  excerpt?: string;
  @Column({ type: 'text' })
  content!: string;
  @Column({ type: 'varchar', length: 100, nullable: true })
  category: string;
  @Column({ type: 'boolean', default: true })
  status: boolean;
  @Column({ type: 'simple-array' })
  tags: string[];
  @CreateDateColumn({ type: 'timestamp' })
  create_at: Date;
}
