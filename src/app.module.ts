import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppService } from "./app.service";
import { EmployeesModule } from "./employees/employees.module";
import { ProductsModule } from "./products/products.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.host,
      port: +process.env.port,
      username: "postgres",
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    EmployeesModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
