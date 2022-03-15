import {Module} from "@nestjs/common";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path';
import { FakeModule } from "./fake/fake.module";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve( __dirname, 'static'),
        }),
        FakeModule,
    ]
})
export class AppModule {}
