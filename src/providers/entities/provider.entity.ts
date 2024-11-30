import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Provider {
    @PrimaryGeneratedColumn('uuid')
    proivderId: string;
    @Column('text')
    providerName: string;
    @Column('text')
    providerEmail: string;
    @Column({type:'text', nullable: true})
    providerPhone: string;
    @OneToMany(() => Product, (photo) => photo.provider)
    products: Product[];
}
