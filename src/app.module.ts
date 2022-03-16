import {Module} from "@nestjs/common";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path';
import { AppController } from "./app.controller";
import { FakeModule } from "./fake/fake.module";

@Module({
    controllers: [],
    providers: [AppController],
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve( __dirname, 'static'),
        }),
        FakeModule,
    ]
})
export class AppModule {}
