import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Provider } from "../../providers/entities/provider.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  productId: string;
  @Column({ type: "text" })
  productName: string;
  @Column({ type: "float" })
  price: number;
  @Column({ type: "int" })
  countSealed: number;
  //@Column({ type: "uuid", nullable: true })
  //provider: string;
  @ManyToOne(() => Provider, (provider) => provider.products, {eager: true})
  provider: Provider;


}
