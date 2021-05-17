import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://gustavo:CEV5nps8fVhEZ7PM@mongodb.zenp9.mongodb.net/kuanto_kusta?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
    ),
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
